let xi = [115.400000,
  115.452500,
  115.505000,
  115.557500,
  115.610000,
  115.662500,
  115.715000,
  115.767500,
  115.820000,
  115.872500,
  115.925000,
  115.977500,
  116.030000,
  116.082500,
  116.135000,
  116.187500,
  116.240000,
  116.292500,
  116.345000,
  116.397500,
  116.450000,
  116.502500,
  116.555000,
  116.607500,
  116.660000,
  116.712500,
  116.765000,
  116.817500,
  116.870000,
  116.922500,
  116.975000,
  117.027500,
  117.080000,
  117.132500,
  117.185000,
  117.237500,
  117.290000,
  117.342500,
  117.395000,
  117.447500,
  117.500000]
let yi = [39.400000,
  39.451613,
  39.503226,
  39.554839,
  39.606452,
  39.658065,
  39.709677,
  39.761290,
  39.812903,
  39.864516,
  39.916129,
  39.967742,
  40.019355,
  40.070968,
  40.122581,
  40.174194,
  40.225806,
  40.277419,
  40.329032,
  40.380645,
  40.432258,
  40.483871,
  40.535484,
  40.587097,
  40.638710,
  40.690323,
  40.741935,
  40.793548,
  40.845161,
  40.896774,
  40.948387,
  41.000000
]


let ZI = [16.286355, None, 15.982175, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 16.047526, None, 16.456106, None, 16.852720, None, 17.248201, None, 17.651027, None, 18.069478, None, 18.514009, None, 19.000554, None, 19.378693, None, 19.257068, None, 19.005491, None, 18.799283, None, 18.619367, None, 18.455213, None, 18.300501, None, 18.151044, None, 18.003599, None, 17.855070, None, 17.701805, None, 17.538838, None, 17.358786, None, 17.159423, None, 16.991718, None, 16.838535, None, 16.693999, None, 16.555009, None, 16.420211, None, 16.289315, None, 16.162566, None, 16.040287, None, 15.922505,
  16.186262, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 16.101021, None, 16.436749, None, 16.763286, None, 17.103937, None, 17.459579, None, 17.795830, None, 18.121664, None, 18.445861, None, 18.743408, None, 18.903679, None, 19.033505, None, 18.947366, None, 18.798001, None, 18.654492, None, 18.510123, None, 18.371534, None, 18.236519, None, 18.103410, None, 17.970588, None, 17.836031, None, 17.696855, None, 17.548715, None, 17.384879, None, 17.104638, None, 16.954615, None, 16.823023, None, 16.693022, None, 16.563438, None, 16.434099, None, 16.305432, None, 16.178060, None, 16.052420,
  16.091255, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 16.066850, None, 16.372460, None, 16.733917, None, 17.058656, None, 17.358734, None, 17.641466, None, 17.911694, None, 18.173263, None, 18.430113, None, 18.601712, None, 18.728022, None, 18.829253, None, 18.902019, None, 18.785201, None, 18.668706, None, 18.549873, None, 18.426818, None, 18.299267, None, 18.173968, None, 18.049576, None, 17.924983, None, 17.798399, None, 17.666947, None, 17.526099, None, 17.368741, None, 17.064834, None, 16.942940, None, 16.823317, None, 16.701301, None, 16.576442, None, 16.448945, None, 16.319335, None, 16.188089,
  15.996047, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.985723, None, 16.357721, None, 16.684971, None, 16.979295, None, 17.251645, None, 17.508274, None, 17.752766, None, 17.987335, None, 18.213737, None, 18.416743, None, 18.549314, None, 18.657608, None, 18.743801, None, 18.809989, None, 18.786327, None, 18.685750, None, 18.581188, None, 18.471611, None, 18.356305, None, 18.234559, None, 18.110227, None, 17.990988, None, 17.871260, None, 17.749000, None, 17.620841, None, 17.481475, None, 17.305223, None, 17.057116, None, 16.948600, None, 16.835903, None, 16.718061, None, 16.594749, None, 16.466020, None, 16.331971,
  15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.994620, None, 16.285789, None, 16.600102, None, 16.880298, None, 17.138413, None, 17.381200, None, 17.612278, None, 17.833474, None, 18.045743, None, 18.249851, None, 18.414765, None, 18.533698, None, 18.630969, None, 18.708112, None, 18.766694, None, 18.793868, None, 18.704198, None, 18.609474, None, 18.509081, None, 18.402733, None, 18.290232, None, 18.171148, None, 18.044710, None, 17.928524, None, 17.811187, None, 17.687792, None, 17.556788, None, 17.413356, None, 17.235225, None, 17.072601, None, 16.970450, None, 16.861782, None, 16.745558, None, 16.621065, None, 16.487602,
  15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 16.008009, None, 16.167514, None, 16.486746, None, 16.765392, None, 17.018640, None, 17.255068, None, 17.479315, None, 17.693640, None, 17.898966, None, 18.095628, None, 18.283930, None, 18.427321, None, 18.536908, None, 18.626705, None, 18.697931, None, 18.751863, None, 18.789861, None, 18.722966, None, 18.635845, None, 18.542497, None, 18.442843, None, 18.336956, None, 18.208114, None, 18.075016, None, 17.938235, None, 17.818016, None, 17.700379, None, 17.580338, None, 17.452248, None, 17.307466, None, 17.176868, None, 17.114349, None, 17.023538, None, 16.919172, None, 16.795445, None, 16.662103,
  15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 15.990194, None, 16.129342, None, 16.339827, None, 16.631306, None, 16.889454, None, 17.126409, None, 17.348939, None, 17.560556, None, 17.762815, None, 17.956210, None, 18.140824, None, 18.316814, None, 18.448620, None, 18.551131, None, 18.635424, None, 18.702566, None, 18.753671, None, 18.789921, None, 18.741193, None, 18.660512, None, 18.568790, None, 18.448317, None, 18.326035, None, 18.202021, None, 18.076061, None, 17.947220, None, 17.815408, None, 17.702745, None, 17.589164, None, 17.470044, None, 17.338520, None, 17.183765, None, 17.174166, None, 17.174266, None, 17.101100, None, 17.011761, None, 16.901141,
  15.950000, None, 15.950000, None, 15.950000, None, 15.950000, None, 16.095694, None, 16.231484, None, 16.466000, None, 16.742975, None, 16.989630, None, 17.216618, None, 17.429809, None, 17.632177, None, 17.824987, None, 18.008618, None, 18.183157, None, 18.348825, None, 18.475970, None, 18.572675, None, 18.652648, None, 18.716898, None, 18.766453, None, 18.802378, None, 18.758258, None, 18.657313, None, 18.545111, None, 18.430199, None, 18.312816, None, 18.193305, None, 18.071762, None, 17.947659, None, 17.819410, None, 17.696024, None, 17.586262, None, 17.472465, None, 17.348791, None, 17.206291, None, 17.171536, None, 17.171435, None, 17.171416, None, 17.171523, None, 17.150931,
  15.950000, None, 15.950000, None, 15.950000, None, 16.029072, None, 16.186278, None, 16.323001, None, 16.561907, None, 16.833405, None, 17.074653, None, 17.295860, None, 17.502632, None, 17.697838, None, 17.882766, None, 18.057924, None, 18.223596, None, 18.380218, None, 18.508433, None, 18.600126, None, 18.676584, None, 18.738828, None, 18.787852, None, 18.819760, None, 18.725719, None, 18.620075, None, 18.513297, None, 18.404691, None, 18.293993, None, 18.179850, None, 18.060888, None, 17.939422, None, 17.814216, None, 17.682599, None, 17.572429, None, 17.461748, None, 17.342685, None, 17.207362, None, 17.169022, None, 17.168783, None, 17.168571, None, 17.168395, None, 17.168269,
  15.950000, None, 15.950000, None, 15.950000, None, 16.105666, None, 16.267723, None, 16.408840, None, 16.634571, None, 16.907931, None, 17.148581, None, 17.367209, None, 17.569727, None, 17.759281, None, 17.937462, None, 18.105110, None, 18.262855, None, 18.411463, None, 18.546491, None, 18.627411, None, 18.687346, None, 18.735221, None, 18.772487, None, 18.750344, None, 18.652718, None, 18.554465, None, 18.454432, None, 18.352096, None, 18.247305, None, 18.139993, None, 18.029868, None, 17.916050, None, 17.796604, None, 17.667685, None, 17.547486, None, 17.438543, None, 17.322022, None, 17.190617, None, 17.166555, None, 17.166219, None, 17.165870, None, 17.165494, None, 17.165065,
  15.950000, None, 15.950000, None, 15.958968, None, 16.171198, None, 16.343095, None, 16.491786, None, 16.689430, None, 16.979061, None, 17.221977, None, 17.435484, None, 17.629190, None, 17.808606, None, 17.977021, None, 18.136584, None, 18.288986, None, 18.426666, None, 18.549855, None, 18.629012, None, 18.682355, None, 18.725421, None, 18.728170, None, 18.673858, None, 18.581883, None, 18.488889, None, 18.393869, None, 18.296366, None, 18.196242, None, 18.093429, None, 17.987659, None, 17.878134, None, 17.763117, None, 17.639333, None, 17.512951, None, 17.402792, None, 17.287354, None, 17.164499, None, 17.164119, None, 17.163711, None, 17.163257, None, 17.162727, None, 17.162062,
  15.950000, None, 15.950000, None, 15.989581, None, 16.232359, None, 16.462470, None, 16.640057, None, 16.788178, None, 17.061239, None, 17.292897, None, 17.494743, None, 17.676557, None, 17.844065, None, 18.000799, None, 18.147120, None, 18.274076, None, 18.391582, None, 18.501988, None, 18.607201, None, 18.669323, None, 18.704492, None, 18.687314, None, 18.598442, None, 18.510198, None, 18.420928, None, 18.329679, None, 18.235982, None, 18.139645, None, 18.040530, None, 17.938310, None, 17.832171, None, 17.720428, None, 17.599969, None, 17.473443, None, 17.364601, None, 17.240638, None, 17.162140, None, 17.161722, None, 17.161256, None, 17.160713, None, 17.160046, None, 17.159170,
  15.950000, None, 15.950000, None, 16.110810, None, 16.421753, None, 16.636093, None, 16.800915, None, 16.938096, None, 17.124846, None, 17.347916, None, 17.539959, None, 17.711405, None, 17.868440, None, 18.011144, None, 18.135387, None, 18.248528, None, 18.353053, None, 18.451125, None, 18.544874, None, 18.629637, None, 18.646782, None, 18.597759, None, 18.522109, None, 18.436209, None, 18.349563, None, 18.261202, None, 18.170583, None, 18.077401, None, 17.981390, None, 17.882095, None, 17.778596, None, 17.669139, None, 17.550581, None, 17.426675, None, 17.320521, None, 17.198879, None, 17.167205, None, 17.159378, None, 17.158855, None, 17.158222, None, 17.157413, None, 17.156316,
  16.044000, None, 16.212737, None, 16.321300, None, 16.607731, None, 16.805989, None, 16.957043, None, 17.082056, None, 17.191871, None, 17.385902, None, 17.569946, None, 17.732541, None, 17.878080, None, 18.003228, None, 18.114884, None, 18.216278, None, 18.309791, None, 18.397425, None, 18.481095, None, 18.559147, None, 18.549559, None, 18.488418, None, 18.425663, None, 18.359375, None, 18.274603, None, 18.188530, None, 18.100479, None, 18.009977, None, 17.916568, None, 17.819602, None, 17.717968, None, 17.609711, None, 17.491460, None, 17.373313, None, 17.268191, None, 17.205434, None, 17.186700, None, 17.164662, None, 17.156491, None, 17.155748, None, 17.154769, None, 17.153402,
  16.396758, None, 16.517800, None, 16.596926, None, 16.793154, None, 16.973235, None, 17.108589, None, 17.219796, None, 17.317121, None, 17.406225, None, 17.583241, None, 17.738458, None, 17.870230, None, 17.984201, None, 18.085374, None, 18.176979, None, 18.261322, None, 18.340265, None, 18.415542, None, 18.434175, None, 18.407632, None, 18.376840, None, 18.322940, None, 18.261165, None, 18.195189, None, 18.112023, None, 18.026145, None, 17.937881, None, 17.846522, None, 17.716207, None, 17.578018, None, 17.437488, None, 17.290778, None, 17.163632, None, 17.082687, None, 17.063899, None, 17.052856, None, 17.051389, None, 17.063334, None, 17.132405, None, 17.152007, None, 17.150270,
  16.815182, None, 16.861989, None, 16.897870, None, 16.980194, None, 17.138458, None, 17.255521, None, 17.351107, None, 17.434715, None, 17.511507, None, 17.584572, None, 17.726407, None, 17.849196, None, 17.954359, None, 18.047161, None, 18.130907, None, 18.207869, None, 18.267972, None, 18.287949, None, 18.292818, None, 18.268540, None, 18.239289, None, 18.204487, None, 18.163002, None, 18.100369, None, 18.031775, None, 17.914302, None, 17.765119, None, 17.618726, None, 17.472977, None, 17.325449, None, 17.172872, None, 17.013224, None, 16.927986, None, 16.891778, None, 16.859599, None, 16.831038, None, 16.805875, None, 16.784168, None, 16.789338, None, 16.864507, None, 16.986015,
  17.316803, None, 17.246415, None, 17.219619, None, 17.212653, None, 17.303352, None, 17.398765, None, 17.476726, None, 17.545485, None, 17.609451, None, 17.671210, None, 17.728428, None, 17.815362, None, 17.914302, None, 18.000948, None, 18.069319, None, 18.101352, None, 18.127415, None, 18.148208, None, 18.156519, None, 18.134864, None, 18.107614, None, 18.074395, None, 18.034778, None, 17.962243, None, 17.822067, None, 17.671150, None, 17.515016, None, 17.360446, None, 17.204717, None, 17.044717, None, 16.876257, None, 16.788484, None, 16.738274, None, 16.690715, None, 16.644606, None, 16.598453, None, 16.553451, None, 16.517178, None, 16.481410, None, 16.529461, None, 16.608069,
  17.550000, None, 17.550000, None, 17.550000, None, 17.502701, None, 17.472824, None, 17.541624, None, 17.599345, None, 17.651966, None, 17.702646, None, 17.751211, None, 17.794321, None, 17.823492, None, 17.836591, None, 17.879222, None, 17.922736, None, 17.957864, None, 17.985934, None, 18.007773, None, 18.022944, None, 18.004238, None, 17.979304, None, 17.947912, None, 17.843264, None, 17.699815, None, 17.550207, None, 17.392365, None, 17.232581, None, 17.070432, None, 16.902866, None, 16.762337, None, 16.661853, None, 16.599563, None, 16.541287, None, 16.486280, None, 16.433638, None, 16.382227, None, 16.330565, None, 16.276557, None, 16.216951, None, 16.216878, None, 16.265799,
  17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.554834, None, 17.614039, None, 17.659075, None, 17.695532, None, 17.724273, None, 17.745772, None, 17.763394, None, 17.778150, None, 17.790549, None, 17.800812, None, 17.810577, None, 17.840966, None, 17.864097, None, 17.880580, None, 17.872717, None, 17.850185, None, 17.736017, None, 17.586886, None, 17.432487, None, 17.270488, None, 17.098504, None, 16.935092, None, 16.804954, None, 16.676765, None, 16.563636, None, 16.490004, None, 16.420359, None, 16.354102, None, 16.290416, None, 16.228178, None, 16.165839, None, 16.101217, None, 16.031085, None, 15.950305, None, 15.912395, None, 15.939021,
  17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.592064, None, 17.630368, None, 17.661850, None, 17.686569, None, 17.706459, None, 17.722889, None, 17.736595, None, 17.747946, None, 17.757099, None, 17.764096, None, 17.768933, None, 17.771604, None, 17.767093, None, 17.665468, None, 17.508933, None, 17.354350, None, 17.199660, None, 17.043124, None, 16.883201, None, 16.725730, None, 16.588330, None, 16.474313, None, 16.389166, None, 16.307934, None, 16.230240, None, 16.155511, None, 16.082839, None, 16.010863, None, 15.937600, None, 15.860143, None, 15.774104, None, 15.672428, None, 15.609813, None, 15.618047,
  17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.563258, None, 17.598477, None, 17.627428, None, 17.650209, None, 17.668688, None, 17.683907, None, 17.696434, None, 17.706554, None, 17.714384, None, 17.719958, None, 17.723269, None, 17.688570, None, 17.522594, None, 17.352790, None, 17.184634, None, 17.015803, None, 16.844299, None, 16.668328, None, 16.492065, None, 16.391489, None, 16.295017, None, 16.202302, None, 16.113127, None, 16.027172, None, 15.943833, None, 15.862057, None, 15.780182, None, 15.695700, None, 15.604871, None, 15.501954, None, 15.377651, None, 15.307452, None, 15.298614,
  17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.551645, None, 17.563627, None, 17.590675, None, 17.612089, None, 17.629380, None, 17.643407, None, 17.654641, None, 17.663313, None, 17.669515, None, 17.673253, None, 17.547741, None, 17.370076, None, 17.182591, None, 16.995118, None, 16.806777, None, 16.619483, None, 16.461524, None, 16.312304, None, 16.205016, None, 16.101437, None, 16.001298, None, 15.904420, None, 15.810456, None, 15.718683, None, 15.627805, None, 15.535740, None, 15.439311, None, 15.333712, None, 15.211489, None, 15.060422, None, 15.005182, None, 14.978265,
  17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.555757, None, 17.561672, None, 17.567307, None, 17.572849, None, 17.584084, None, 17.596832, None, 17.606486, None, 17.613232, None, 17.599708, None, 17.401608, None, 17.197621, None, 16.997990, None, 16.806672, None, 16.624152, None, 16.446361, None, 16.271361, None, 16.114961, None, 16.001479, None, 15.891475, None, 15.784665, None, 15.680802, None, 15.579397, None, 15.479484, None, 15.379377, None, 15.276398, None, 15.166453, None, 15.043299, None, 14.897117, None, 14.734144, None, 14.701558, None, 14.653037,
  17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.552693, None, 17.559027, None, 17.564964, None, 17.570729, None, 17.576466, None, 17.582255, None, 17.588134, None, 17.594106, None, 17.529995, None, 17.312373, None, 17.095947, None, 16.878385, None, 16.657722, None, 16.441853, None, 16.242731, None, 16.047475, None, 15.895129, None, 15.776808, None, 15.661725, None, 15.549472, None, 15.439609, None, 15.331364, None, 15.223360, None, 15.113324, None, 14.997711, None, 14.871115, None, 14.725201, None, 14.546590, None, 14.442592, None, 14.390892, None, 14.313924,
  17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.555168, None, 17.561668, None, 17.567860, None, 17.573930, None, 17.579994, None, 17.586118, None, 17.592329, None, 17.492620, None, 17.242658, None, 16.996560, None, 16.751504, None, 16.505305, None, 16.256184, None, 16.002654, None, 15.770069, None, 15.643721, None, 15.522916, None, 15.404760, None, 15.288619, None, 15.173734, None, 15.058883, None, 14.942066, None, 14.820127, None, 14.688220, None, 14.538921, None, 14.360568, None, 14.191850, None, 14.138400, None, 14.059752, None, 13.942094,
  17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.556693, None, 17.563659, None, 17.570339, None, 17.576911, None, 17.583483, None, 17.590124, None, 17.478633, None, 17.197266, None, 16.933618, None, 16.678134, None, 16.424215, None, 16.166606, None, 15.900779, None, 15.676005, None, 15.492000, None, 15.306029, None, 15.148424, None, 14.986100, None, 14.866916, None, 14.744820, None, 14.616883, None, 14.478576, None, 14.322947, None, 14.139151, None, 13.935820, None, 13.881290, None, 13.800592, None, 13.750000, None, 13.750000,
  17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.556869, None, 17.564698, None, 17.572215, None, 17.590555, None, 17.611346, None, 17.551488, None, 17.237625, None, 16.951601, None, 16.680314, None, 16.414689, None, 16.147887, None, 15.898322, None, 15.713368, None, 15.526725, None, 15.335830, None, 15.138439, None, 14.931941, None, 14.712611, None, 14.474653, None, 14.250205, None, 14.087741, None, 13.910256, None, 13.750000, None, 13.750000, None, 13.750000, None, 13.750000, None, 13.750000, None, 13.750000,
  17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.570662, None, 17.604239, None, 17.631651, None, 17.655129, None, 17.675999, None, 17.341299, None, 17.025122, None, 16.734318, None, 16.455313, None, 16.193486, None, 15.999597, None, 15.809101, None, 15.617613, None, 15.421991, None, 15.219477, None, 15.006952, None, 14.780114, None, 14.532408, None, 14.253408, None, 13.926028, None, 13.750000, None, 13.750000, None, 13.750000, None, 13.750000, None, 13.750000, None, 13.750000, None, 13.750000,
  17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.590217, None, 17.628025, None, 17.662067, None, 17.691924, None, 17.716665, None, 17.738603, None, 17.538309, None, 17.176910, None, 16.859068, None, 16.584992, None, 16.368960, None, 16.166356, None, 15.968748, None, 15.770691, None, 15.568215, None, 15.357839, None, 15.135712, None, 14.896667, None, 14.632943, None, 14.384182, None, 14.188512, None, 13.971462, None, 13.750000, None, 13.750000, None, 13.750000, None, 13.750000, None, 13.750000, None, 13.750000,
  nan, None, nan, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550096, None, 17.613703, None, 17.661042, None, 17.699682, None, 17.733291, None, 17.763875, None, 17.792671, None, 17.820572, None, 17.840422, None, 17.439168, None, 17.105293, None, 16.840452, None, 16.610727, None, 16.398456, None, 16.193155, None, 15.987958, None, 15.777784, None, 15.558151, None, 15.332267, None, 15.146714, None, 14.958231, None, 14.763083, None, 14.555587, None, 14.326915, None, 14.062961, None, 13.750000, None, 13.750000, None, 13.750000, None, 13.750000, None, 13.750000,
  nan, None, nan, None, nan, None, nan, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.550000, None, 17.643046, None, 17.705536, None, 17.748123, None, 17.781261, None, 17.809266, None, 17.834266, None, 17.857489, None, 17.879788, None, 17.880000, None, 17.807983, None, 17.458663, None, 17.177207, None, 16.935990, None, 16.719041, None, 16.516627, None, 16.322632, None, 16.133136, None, 15.945520, None, 15.757815, None, 15.568141, None, 15.374144, None, 15.172347, None, 14.957284, None, 14.720127, None, 14.446208, None, 14.109907, None, 13.750000, None, 13.750000, None, 13.750000, None, 13.750000,
  nan, None, nan, None, nan, None, nan, None, nan, None, nan, None, nan, None, nan, None, 17.550000, None, 17.550000, None, 17.723684, None, 17.800271, None, 17.832382, None, 17.854181, None, 17.872055, None, 17.880000, None, 17.880000, None, 17.880000, None, 17.880000, None, 17.880000, None, 17.880000, None, 17.813688, None, 17.544962, None, 17.315169, None, 17.109012, None, 16.916826, None, 16.732306, None, 16.551252, None, 16.370788, None, 16.188765, None, 16.003241, None, 15.811919, None, 15.611467, None, 15.396553, None, 15.158265, None, 14.881143, None, 14.536754, None, 14.067656, None, 13.750000, None, 13.750000, None, 13.750000]
