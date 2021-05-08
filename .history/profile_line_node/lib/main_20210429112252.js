import * as d3 from 'd3'
import '../styles/index.css';
let { log } = console
let [w, h] = [231.25, 400]
let margin = { top: 50, right: 30, bottom: 30, left: 40 }
let [width, height] = [w - margin.left - margin.right, h - margin.top]
console.log("w_h", [width, height])
function customYAxis (g, y) {
  `
  自定义y轴坐标
  :param g: 被绑定的g,
  :param yAxis: 原来的yAxis
  :returns: 
  `
  var s = g.selection ? g.selection() : g;
  let yAxis = d3.axisRight(y)
    .tickFormat(d => `${d}km`)
    .tickSize(w - margin.right - margin.left)
    .ticks(5)
  g.call(yAxis);

  s.selectAll(".tick line")
    .attr("stroke", "#777")
    .attr("stroke-dasharray", "2,2")
    .filter(d => d == 0)
    .attr("display", "none");
  s.selectAll(".tick text").attr("x", -20).attr("dy", -4);
  if (s !== g) g.selectAll(".tick text").attrTween("x", null).attrTween("dy", null);
}

d3.json('../data/data.json', function (json) {
  return json
}).then(function (json) {

  //处理数据
  json = json[0]
  let cloudData = json["cloudData"]
  let humiData = json["humiData"]
  let lastTransform = null //记录页面当前的transform
  log(json)
  let [sd, modal] = [[], []]
  log(sd)
  for (let item of humiData) {
    if (item['type'] == "sd") {
      sd.push(item)
    } else {
      modal.push(item)
    }

  }

  var xScale = d3.scaleLinear()
    .domain([0, d3.max(humiData, d => {
      return d['humi']
    })])
    .range([margin.left, w - margin.right])

  let yScale = d3.scaleLinear()
    .domain([0, d3.max(humiData, d => {
      return d['height']
    })])
    .range([h - margin.top, margin.bottom])



  var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("margin-top", "10")


  svg.append("clipPath")
    .attr("id", "myClip")
    .append("rect")
    .attr("x", margin.left)
    .attr("y", 0)
    .attr("width", w - margin.left - margin.right)
    .attr("height", h - margin.top)

  let map = svg.append("g")
    .attr("class", "map")

  map.attr("clip-path", "url(#myClip)")
  let xAxis = (g, x) => {
    g.attr("id", "x-axis")
      .attr("transform", `translate(0,${h - margin.top})`)
      .call(d3.axisBottom(x)
        .tickFormat(d => `${d}%`)
        .ticks(5));
  }
  map.append("rect")
    .attr("x", margin.left)
    .attr("y", 0)
    .attr("width", w - margin.left - margin.right)
    .attr("height", h - margin.top)
    .attr("opacity", 0)

  let y_axis = svg.append('g')
    .attr("id", "y-axis")
    .attr("transform", `translate(${margin.left},0)`)
    .call(customYAxis, yScale);

  let x_axis = svg.append('g').call(xAxis, xScale)
  let brush_area = svg.append('g')
    .attr("class", "brush_area")
    .attr("transform", `translate(${margin.left},0)`)


  /* brush 和zoom事件*/
  //brush
  const brush = d3.brush()
    .extent([[0, 0], [w - margin.left - margin.right, h - margin.top]])
    .on("start", (d) => { brush_startEvent(d); })
    .on("brush", (d) => { brush_brushEvent(d); })
  // .on("end", () => { brush_endEvent(); })
  // .on("start.nokey", function () {
  //   d3.select(window).on("keydown.brush keyup.brush", null);
  // });
  brush_area.call(brush)
  let brushStartPoint = null;
  let lastSelection = null
  function brush_startEvent (d) {
    //处理鼠标点下去的事件
    //获取当前位置
    console.log("brushEvent", d)
    const sourceEvent = d.sourceEvent;
    const selection = d.selection;
    //为什么可能不是mousedown
    if (sourceEvent.type === 'mousedown') {
      brushStartPoint = {
        mouse: {
          x: sourceEvent.screenX,
          y: sourceEvent.screenY
        },
        x: selection[0][0],
        y: selection[0][1]
      }
      console.log("brushStartPoint", brushStartPoint)
    } else {
      brushStartPoint = null;
    }
  }

  function brush_brushEvent (d) {

    //绘制brush矩形，主要是考虑各种边界情况以及保持brush的纵横比和坐标轴相同
    if (brushStartPoint != null) {
      console.log(d)
      const scale = width / height
      const sourceEvent = d.sourceEvent
      const mouse = {
        x: sourceEvent.screenX,
        y: sourceEvent.screenY
      }

      //如果鼠标移出去了 处理为移到边界
      if (mouse.x < 0) {
        mouse.x = 0
      }
      if (mouse.y < 0) {
        mouse.y = 0
      }
      //这边为什么用mouse.y？
      let distance = mouse.y - brushStartPoint.mouse.y

      //相对父元素的位置
      let yPosition = brushStartPoint.y + distance
      let xCorMulti = 1;
      if ((distance < 0 && mouse.x > brushStartPoint.mouse.x) || (distance > 0 && mouse.x < brushStartPoint.mouse.x)) {
        xCorMulti = -1
      }
      //处理鼠标移出显示区域
      if (yPosition > height) {
        distance = height - brushStartPoint.y
      } else if (yPosition < 0) {
        distance = 0 - brushStartPoint.y
        yPosition = 0;
      }
      let xPosition = brushStartPoint.x + distance * scale * xCorMulti
      const oldDistance = distance;
      if (xPosition > width) {
        distance = (width - brushStartPoint.x) / scale
        xPosition = width
      } else if (xPosition < 0) {
        distance = (0 - brushStartPoint.x) / scale
        xPosition = 0
      }
      //判断一开始设定的矩形是否超出边界了,超出要修正y
      if (oldDistance !== distance)
        yPosition = brushStartPoint.y + distance
      const posValue = Math.abs(distance);
      const selection = brush_area.select(".selection")
        .attr("width", posValue * scale)
        .attr("height", posValue)



      if (xPosition < brushStartPoint.x) {
        selection.attr('x', xPosition);
      }
      if (yPosition < brushStartPoint.y) {
        selection.attr('y', yPosition);
      }
      console.log("xPos,yPos", [xPosition, yPosition])

      const minX = Math.min(brushStartPoint.x, xPosition);
      const maxX = Math.max(brushStartPoint.x, xPosition);
      const minY = Math.min(brushStartPoint.y, yPosition);
      const maxY = Math.max(brushStartPoint.y, yPosition);

      //保存当前选中区域的在当前坐标系下的坐标，用于后面通过变换实现zoom用
      lastSelection = { x1: minX, x2: maxX, y1: minY, y2: maxY }

    }

  }

  // function brush_endEvent (d) {
  //   const s = d3.event.selection;
  //   console.log("selection", s)
  //   if (!s && lastSelection !== null) {

  //   } else {
  //     //吧我们的选择框弄成none
  //     svg_brush.call(brush.move, null);
  //   }
  // }

  // x_axis.call(xAxis, xScale)
  let zoomed = ({ transform }) => {
    log(transform)
    lastTransform = transform
    let x = transform.rescaleX(xScale).interpolate(d3.interpolateRound)
    let y = transform.rescaleY(yScale).interpolate(d3.interpolateRound)
    d3.select(".sd_group")
      .attr("transform", transform)


    d3.select(".modal_group")
      .attr("transform", transform)
    x_axis
      .call(xAxis, x)
    y_axis
      .call(customYAxis, y)

    d3.select(".cloud")
      .attr("transform", transform)
  }
  // svg_brush.append("g")
  //   .attr("class", "brush")
  //   .call(brush)

  let zoom = d3.zoom()
    .scaleExtent([1, 2])
    .translateExtent([[-100, -110], [700, 700]])
    .on("zoom", zoomed)

  map.call(zoom)
  // .call(zoom.transform, d3.zoomIdentity);
  //绘制云顶云高
  let rects = map.append('g')
    .attr("class", "cloud")
    .selectAll("rect")
    .data(cloudData)
    .enter()
    .append("rect")
    .attr("x", xScale(0))
    .attr("y", d => yScale(d[1]))
    .attr("width", w - margin.left - margin.right)
    .attr("height", d => {
      return h - margin.top - yScale(d[1] - d[0])
    })
    .style("fill", "rgb(246 242 242 / 85%)")
  log("rect", rects)
  //管理实测廓线
  let sd_group = map.append("g")
    .attr("class", "sd_group")
  //管理模型廓线
  let modal_group = map.append("g")
    .attr("class", "modal_group")
  //绘制实测曲线
  let line = d3.line()
    .curve(d3.curveCardinal)
    .x((d) => {
      return xScale(d['humi'])
    })
    .y((d) => {
      return yScale(d['height'])
    })

  let sd_l = sd_group.append("path")
    .datum(sd)
    .attr("class", "std_line")
    .attr("d", line)


  //绘制南郊曲线

  let nj_l = modal_group.append("path")
    .datum(modal)
    .attr("class", "nj_line")
    .attr("d", line)


  //绘制辅助工具提示用的圆点
  sd_group.selectAll("circle")
    .data(sd)
    .enter()
    .append("circle")
    .attr("r", 1)
    .attr("cx", function (d) { return xScale(d['humi']); })
    .attr("cy", function (d) { return yScale(d['height']) })
    .append("title")
    .text(function (d) { return `探空实测\n湿度:${d['humi']} 高度:${d['height']}` })

  modal_group.selectAll("circle")
    .data(modal)
    .enter()
    .append("circle")
    .attr("r", 1)
    .attr("cx", function (d) { return xScale(d['humi']); })
    .attr("cy", function (d) { return yScale(d['height']) })
    .append("title")
    .text(function (d) { return `南郊四要素模型小样本扰动模型\n湿度:${d['humi']} 高度:${d['height']}` })





  //点击显示隐藏的图例
  var text_sd = svg.append("text")
    .attr("id", 'tt_sd')
    .text("探空实测");

  var text_modal = svg.append("text")
    .text(`TEST南郊四要素模型小样本扰动模型
  `);


  text_sd.attr("x", xScale(0))
    .attr("y", h - margin.top + 30)
    .attr("font-family", "sans-serif")
    .attr("font-size", "9px");

  text_modal.attr("x", xScale(0))
    .attr("y", h - margin.top + 40)
    .attr("font-family", "sans-serif")
    .attr("font-size", "9px");

  var sd_is = true
  var modal_is = true
  svg.selectAll("text")
    .on("click", function () {

      let id = d3.select(this).attr("id")
      if (id == 'tt_sd') {
        if (sd_is) {
          sd_is = false
          d3.select(".sd_group")
            .style("display", "none")
        } else {
          sd_is = true
          d3.select(".sd_group")
            .style("display", "inherit")
        }
      } else {
        if (modal_is) {
          modal_is = false
          d3.select(".modal_group")
            .style("display", "none")
          // d3.select(".modal_group circle")
          //   .style("display", "none")
        } else {
          modal_is = true
          d3.select(".modal_group")
            .style("display", "inherit")
        }
      }
    })
  // 添加复位按钮监听事件
  d3.selectAll('button')
    .on("click", function () {

      let id = d3.select(this).attr("id")
      log("id", id)
      if (id == "reset") {
        const transform = d3.zoomIdentity
        let transition = d3.transition().duration(1000)
        d3.select(".sd_group")
          .transition(transition)
          .attr("transform", transform)
          .style("display", "inherit")

        d3.select(".modal_group")
          .transition(transition)
          .attr("transform", transform)
          .style("display", "inherit")

        x_axis
          .transition(transition)
          .call(xAxis, xScale)

        y_axis
          .transition(transition)
          .call(customYAxis, yScale)

        d3.select(".cloud")
          .transition(transition)
          .attr("transform", transform)
      } else {
        if (id == "brush") {
          d3.select(".brush_area").attr("display", "inherit")
        } else {
          d3.select(".brush_area").attr("display", "none")

        }
      }

    })

});
