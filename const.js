// Define your constants
const MIN_AGE = 0;
const MAX_AGE = 100;
const MIN_TMB = 0;
const MAX_TMB = 100;
const MIN_PDL1 = 0;
const MAX_PDL1 = 100;
const MIN_Albumin = 0;
const MAX_Albumin = 10;
const MIN_NLR = 0;
const MAX_NLR = 10;

const score_ORR_lookup_LLR6Pan = {
    0:[0,0,0],
    0.01:[0,0,0],
    0.02:[0,0,0],
    0.03:[0,0,0],
    0.04:[0,0,0],
    0.05:[0,0,0],
    0.06:[0,0,0],
    0.07:[0,0,0],
    0.08:[0,0,0],
    0.09:[0,0,0],
    0.1:[0,0,0],
    0.11:[0.020047934,0,0.065217391],
    0.12:[0.017060354,0,0.054545455],
    0.13:[0.027553411,0,0.069444444],
    0.14:[0.0253903,0,0.063296162],
    0.15:[0.023346438,0,0.05952381],
    0.16:[0.022329159,0,0.056179775],
    0.17:[0.019515285,0,0.050638275],
    0.18:[0.027534123,0,0.061871778],
    0.19:[0.034139729,0,0.072001802],
    0.2:[0.030056877,0,0.064521931],
    0.21:[0.035827256,0.007406046,0.071958401],
    0.22:[0.033188956,0.006754505,0.066675978],
    0.23:[0.048654633,0.019354839,0.086333156],
    0.24:[0.053946355,0.024996891,0.090935214],
    0.25:[0.072877341,0.041226594,0.114603365],
    0.26:[0.100403523,0.062486173,0.142202823],
    0.27:[0.108203723,0.067226891,0.150637435],
    0.28:[0.113047879,0.075939522,0.157894737],
    0.29:[0.126065644,0.086466165,0.166666667],
    0.3:[0.138237287,0.098298438,0.179496403],
    0.31:[0.149919897,0.10995843,0.191375903],
    0.32:[0.171968185,0.13252917,0.214063213],
    0.33:[0.181806657,0.144160757,0.225989138],
    0.34:[0.184030461,0.146704611,0.229064204],
    0.35:[0.193421848,0.156506545,0.235298191],
    0.36:[0.190021206,0.153840782,0.230779944],
    0.37:[0.20359165,0.167629647,0.246126452],
    0.38:[0.207853418,0.168411628,0.249322853],
    0.39:[0.205974782,0.164082881,0.245347128],
    0.4:[0.210454597,0.168035522,0.25304878],
    0.41:[0.216497237,0.174555189,0.258789508],
    0.42:[0.198861,0.158326613,0.240389493],
    0.43:[0.206353738,0.162627618,0.249288376],
    0.44:[0.237161702,0.189085859,0.286789833],
    0.45:[0.231652649,0.181436599,0.280935228],
    0.46:[0.232037579,0.18112058,0.283591303],
    0.47:[0.229121222,0.173680948,0.284362296],
    0.48:[0.243333921,0.185676692,0.300448957],
    0.49:[0.263802721,0.201056872,0.329548576],
    0.5:[0.287458333,0.222205589,0.352957426],
    0.51:[0.301999191,0.233124477,0.370810048],
    0.52:[0.342008558,0.272688752,0.415741703],
    0.53:[0.341609423,0.270263514,0.416197013],
    0.54:[0.341568806,0.273671374,0.413043478],
    0.55:[0.375071451,0.303899287,0.443915989],
    0.56:[0.400749019,0.331548549,0.466035599],
    0.57:[0.411200004,0.341113637,0.476636725],
    0.58:[0.40561444,0.339447466,0.470858495],
    0.59:[0.407682479,0.341688556,0.473963835],
    0.6:[0.389767683,0.327863621,0.453292463],
    0.61:[0.391644585,0.327102804,0.454192322],
    0.62:[0.399398635,0.336583054,0.46278535],
    0.63:[0.4085647,0.346358786,0.473934266],
    0.64:[0.405269077,0.336953661,0.470611094],
    0.65:[0.405356426,0.337738371,0.475695548],
    0.66:[0.402740799,0.331207386,0.477297431],
    0.67:[0.418020615,0.343195266,0.491480519],
    0.68:[0.448550618,0.370364358,0.529033196],
    0.69:[0.473068388,0.391261999,0.550313972],
    0.7:[0.519901805,0.436033558,0.603085013],
    0.71:[0.518630188,0.425191929,0.609101732],
    0.72:[0.517206202,0.430638175,0.604666463],
    0.73:[0.519035291,0.425921342,0.607485798],
    0.74:[0.520915043,0.424224599,0.613218268],
    0.75:[0.505575422,0.403810976,0.602043559],
    0.76:[0.523298694,0.422208835,0.628214286],
    0.77:[0.543294208,0.43373494,0.648648649],
    0.78:[0.551976484,0.447368421,0.658823529],
    0.79:[0.580298553,0.474989407,0.690166736],
    0.8:[0.623798277,0.514275794,0.731343284],
    0.81:[0.635103064,0.525,0.741605136],
    0.82:[0.652804231,0.539419678,0.767123288],
    0.83:[0.637573987,0.518943693,0.756766409],
    0.84:[0.693197094,0.584615385,0.811594203],
    0.85:[0.684149508,0.583306962,0.795500614],
    0.86:[0.694541738,0.578926809,0.809544335],
    0.87:[0.696346059,0.581788856,0.815384615],
    0.88:[0.722219302,0.603435598,0.833390411],
    0.89:[0.724310268,0.603448276,0.837859634],
    0.9:[0.724792619,0.588203325,0.843137255],
    0.91:[0.736668702,0.590810277,0.861174242],
    0.92:[0.783262359,0.634146341,0.911764706],
    0.93:[0.836733832,0.69994186,0.954594862],
    0.94:[0.852495333,0.703703704,0.967741935],
    0.95:[0.954902449,0.846153846,1],
    0.96:[0.948019911,0.831617647,1],
    0.97:[0.933359493,0.777777778,1],
    0.98:[1,1,1],
    0.99:[1,1,1],
    1:[1,1,1]
}

const score_ORR_lookup_LLR6NSCLC = {
    0	: [	0	,	0	,	0	],
    0.01	: [	0	,	0	,	0	],
    0.02	: [	0	,	0	,	0	],
    0.03	: [	0	,	0	,	0	],
    0.04	: [	0	,	0	,	0	],
    0.05	: [	0	,	0	,	0	],
    0.06	: [	0	,	0	,	0	],
    0.07	: [	0	,	0	,	0	],
    0.08	: [	0	,	0	,	0	],
    0.09	: [	0	,	0	,	0	],
    0.1	: [	0	,	0	,	0	],
    0.11	: [	0	,	0	,	0	],
    0.12	: [	0	,	0	,	0	],
    0.13	: [	0	,	0	,	0	],
    0.14	: [	0	,	0	,	0	],
    0.15	: [	0	,	0	,	0	],
    0.16	: [	0	,	0	,	0	],
    0.17	: [	0	,	0	,	0	],
    0.18	: [	0	,	0	,	0	],
    0.19	: [	0	,	0	,	0	],
    0.2	: [	0	,	0	,	0	],
    0.21	: [	0	,	0	,	0	],
    0.22	: [	0	,	0	,	0	],
    0.23	: [	0	,	0	,	0	],
    0.24	: [	0	,	0	,	0	],
    0.25	: [	0.102131183	,	0	,	0.266666667	],
    0.26	: [	0.068260937	,	0	,	0.173976982	],
    0.27	: [	0.119030131	,	0.025641026	,	0.227305195	],
    0.28	: [	0.091578534	,	0.019598416	,	0.175464396	],
    0.29	: [	0.128138219	,	0.05553653	,	0.215189873	],
    0.3	: [	0.12275113	,	0.055555556	,	0.20238472	],
    0.31	: [	0.131328076	,	0.065210333	,	0.209316681	],
    0.32	: [	0.118170581	,	0.058249605	,	0.190487013	],
    0.33	: [	0.133124818	,	0.072055985	,	0.2	],
    0.34	: [	0.138051844	,	0.076923077	,	0.206263486	],
    0.35	: [	0.132870198	,	0.073159645	,	0.200081301	],
    0.36	: [	0.145584893	,	0.078947368	,	0.215706489	],
    0.37	: [	0.126847789	,	0.063636364	,	0.195135207	],
    0.38	: [	0.146967059	,	0.075944572	,	0.22370435	],
    0.39	: [	0.120855563	,	0.05616417	,	0.188251634	],
    0.4	: [	0.140754289	,	0.072267642	,	0.214308318	],
    0.41	: [	0.15059244	,	0.076898734	,	0.23289895	],
    0.42	: [	0.183080863	,	0.099969136	,	0.272727273	],
    0.43	: [	0.183647068	,	0.095222008	,	0.283587132	],
    0.44	: [	0.177632206	,	0.090879953	,	0.274531117	],
    0.45	: [	0.207220221	,	0.115348101	,	0.304894986	],
    0.46	: [	0.248548068	,	0.151477273	,	0.354896313	],
    0.47	: [	0.257034269	,	0.151515152	,	0.366683673	],
    0.48	: [	0.266033199	,	0.153804348	,	0.381888112	],
    0.49	: [	0.308448075	,	0.18510101	,	0.428633005	],
    0.5	: [	0.315276036	,	0.195068464	,	0.434000304	],
    0.51	: [	0.309379791	,	0.181818182	,	0.4375	],
    0.52	: [	0.355329267	,	0.230769231	,	0.489372558	],
    0.53	: [	0.32974908	,	0.204081633	,	0.461538462	],
    0.54	: [	0.341582728	,	0.215678733	,	0.471747766	],
    0.55	: [	0.315764697	,	0.195522774	,	0.444444444	],
    0.56	: [	0.291685059	,	0.173005319	,	0.422230047	],
    0.57	: [	0.321544583	,	0.192945129	,	0.450980392	],
    0.58	: [	0.338849068	,	0.211513158	,	0.469445514	],
    0.59	: [	0.36331621	,	0.232513417	,	0.49153237	],
    0.6	: [	0.399807582	,	0.270808532	,	0.533333333	],
    0.61	: [	0.412590833	,	0.285654762	,	0.535747354	],
    0.62	: [	0.387932482	,	0.259259259	,	0.511111111	],
    0.63	: [	0.452819827	,	0.32	,	0.576973684	],
    0.64	: [	0.469072234	,	0.32598563	,	0.600086207	],
    0.65	: [	0.519868605	,	0.37253762	,	0.66	],
    0.66	: [	0.580903703	,	0.425916076	,	0.723404255	],
    0.67	: [	0.604821271	,	0.450912779	,	0.740089744	],
    0.68	: [	0.610233263	,	0.459401544	,	0.750127551	],
    0.69	: [	0.590978913	,	0.433310811	,	0.75	],
    0.7	: [	0.568219678	,	0.4	,	0.72972973	],
    0.71	: [	0.601763312	,	0.421010187	,	0.777898551	],
    0.72	: [	0.608756069	,	0.420942982	,	0.785714286	],
    0.73	: [	0.626931807	,	0.420942982	,	0.818181818	],
    0.74	: [	0.65335661	,	0.444444444	,	0.842105263	],
    0.75	: [	0.638654719	,	0.416666667	,	0.833333333	],
    0.76	: [	0.581031419	,	0.333333333	,	0.791875	],
    0.77	: [	0.601253264	,	0.307692308	,	0.842105263	],
    0.78	: [	0.613349447	,	0.3	,	0.875183824	],
    0.79	: [	0.724155881	,	0.4	,	1	],
    0.8	: [	0.774827695	,	0.444444444	,	1	],
    0.81	: [	0.775078733	,	0.444444444	,	1	],
    0.82	: [	0.867927323	,	0.571428571	,	1	],
    0.83	: [	0.827292297	,	0.447979798	,	1	],
    0.84	: [	1	,	1	,	1	],
    0.85	: [	1	,	1	,	1	],
    0.86	: [	1	,	1	,	1	],
    0.87	: [	1	,	1	,	1	],
    0.88	: [	1	,	1	,	1	],
    0.89	: [	1	,	1	,	1	],
    0.9	: [	1	,	1	,	1	],
    0.91	: [	1	,	1	,	1	],
    0.92	: [	1	,	1	,	1	],
    0.93	: [	1	,	1	,	1	],
    0.94	: [	1	,	1	,	1	],
    0.95	: [	1	,	1	,	1	],
    0.96	: [	1	,	1	,	1	],
    0.97	: [	1	,	1	,	1	],
    0.98	: [	1	,	1	,	1	],
    0.99	: [	1	,	1	,	1	],
    1	: [	1	,	1	,	1	]
}

const score_ORR_lookup_LLR5Pan = {
    0	: [	0	,	0	,	0	],
    0.01	: [	0	,	0	,	0	],
    0.02	: [	0	,	0	,	0	],
    0.03	: [	0	,	0	,	0	],
    0.04	: [	0	,	0	,	0	],
    0.05	: [	0	,	0	,	0	],
    0.06	: [	0	,	0	,	0	],
    0.07	: [	0	,	0	,	0	],
    0.08	: [	0	,	0	,	0	],
    0.09	: [	0	,	0	,	0	],
    0.1	: [	0	,	0	,	0	],
    0.11	: [	0	,	0	,	0	],
    0.12	: [	0	,	0	,	0	],
    0.13	: [	0.018621228	,	0	,	0.058823529	],
    0.14	: [	0.032806201	,	0	,	0.084754778	],
    0.15	: [	0.044019628	,	0	,	0.10002809	],
    0.16	: [	0.03964658	,	0	,	0.090909091	],
    0.17	: [	0.050995124	,	0.012334656	,	0.103466236	],
    0.18	: [	0.051176277	,	0.011901261	,	0.105882353	],
    0.19	: [	0.065125754	,	0.021047149	,	0.120491858	],
    0.2	: [	0.063112971	,	0.02	,	0.116284714	],
    0.21	: [	0.066198845	,	0.023484655	,	0.118841584	],
    0.22	: [	0.064314697	,	0.020822704	,	0.1165089	],
    0.23	: [	0.058509515	,	0.021501881	,	0.107855392	],
    0.24	: [	0.055609704	,	0.017094017	,	0.1	],
    0.25	: [	0.052305257	,	0.016518928	,	0.095248447	],
    0.26	: [	0.08410112	,	0.041666667	,	0.133333333	],
    0.27	: [	0.071102337	,	0.03447103	,	0.114458981	],
    0.28	: [	0.067272283	,	0.033879577	,	0.106923854	],
    0.29	: [	0.082840244	,	0.044441708	,	0.125628798	],
    0.3	: [	0.111681193	,	0.070075226	,	0.153532441	],
    0.31	: [	0.123373744	,	0.081808926	,	0.166687192	],
    0.32	: [	0.139049081	,	0.095025804	,	0.183893294	],
    0.33	: [	0.14682329	,	0.102357894	,	0.191762345	],
    0.34	: [	0.160309925	,	0.11740816	,	0.204313002	],
    0.35	: [	0.173454933	,	0.13098026	,	0.216787365	],
    0.36	: [	0.171691627	,	0.131832298	,	0.217255869	],
    0.37	: [	0.184844566	,	0.143720169	,	0.229566096	],
    0.38	: [	0.222375561	,	0.181248994	,	0.270844834	],
    0.39	: [	0.229665138	,	0.189094764	,	0.277168301	],
    0.4	: [	0.246637115	,	0.203422858	,	0.291796617	],
    0.41	: [	0.245086622	,	0.203069444	,	0.29072792	],
    0.42	: [	0.249485944	,	0.207857252	,	0.295900558	],
    0.43	: [	0.250719784	,	0.209300746	,	0.292760794	],
    0.44	: [	0.2586951	,	0.214829763	,	0.2994927	],
    0.45	: [	0.254222933	,	0.211477167	,	0.296661505	],
    0.46	: [	0.250650295	,	0.208119283	,	0.29488342	],
    0.47	: [	0.266338185	,	0.222492203	,	0.310696263	],
    0.48	: [	0.26082611	,	0.217274504	,	0.305867125	],
    0.49	: [	0.257685792	,	0.213071634	,	0.301568708	],
    0.5	: [	0.253375388	,	0.21089112	,	0.296709051	],
    0.51	: [	0.269745139	,	0.225244609	,	0.314580222	],
    0.52	: [	0.27450673	,	0.229691207	,	0.322766779	],
    0.53	: [	0.284850202	,	0.240352768	,	0.338029169	],
    0.54	: [	0.276419249	,	0.228913774	,	0.329428898	],
    0.55	: [	0.309283877	,	0.256227758	,	0.361488412	],
    0.56	: [	0.327536348	,	0.270041139	,	0.382684985	],
    0.57	: [	0.325022231	,	0.265131923	,	0.382675006	],
    0.58	: [	0.340322336	,	0.280333513	,	0.397403921	],
    0.59	: [	0.387418965	,	0.322071158	,	0.45	],
    0.6	: [	0.400594235	,	0.333333333	,	0.469400049	],
    0.61	: [	0.403299563	,	0.335259295	,	0.476532508	],
    0.62	: [	0.412786867	,	0.337744126	,	0.487349586	],
    0.63	: [	0.439022972	,	0.363636364	,	0.513000176	],
    0.64	: [	0.481270099	,	0.398572261	,	0.557145583	],
    0.65	: [	0.469071103	,	0.386353668	,	0.54920082	],
    0.66	: [	0.504455072	,	0.416666667	,	0.590182563	],
    0.67	: [	0.514582689	,	0.421981909	,	0.601694915	],
    0.68	: [	0.537006914	,	0.444385965	,	0.62640056	],
    0.69	: [	0.507137252	,	0.413793103	,	0.604849321	],
    0.7	: [	0.507842425	,	0.409988095	,	0.604660934	],
    0.71	: [	0.503056136	,	0.404483033	,	0.597828888	],
    0.72	: [	0.541197117	,	0.441860465	,	0.64078989	],
    0.73	: [	0.540987044	,	0.446409161	,	0.635535259	],
    0.74	: [	0.543266008	,	0.448979592	,	0.638100304	],
    0.75	: [	0.563746654	,	0.461516854	,	0.662604167	],
    0.76	: [	0.580813743	,	0.478222952	,	0.685735608	],
    0.77	: [	0.570308878	,	0.464257519	,	0.676987179	],
    0.78	: [	0.531228956	,	0.418556202	,	0.640015625	],
    0.79	: [	0.542239808	,	0.422535211	,	0.661774642	],
    0.8	: [	0.546850679	,	0.421854441	,	0.673940217	],
    0.81	: [	0.598735211	,	0.474989407	,	0.716981132	],
    0.82	: [	0.583435027	,	0.44997449	,	0.714285714	],
    0.83	: [	0.625248562	,	0.489795918	,	0.756097561	],
    0.84	: [	0.640454875	,	0.488875969	,	0.777845528	],
    0.85	: [	0.661646011	,	0.5208125	,	0.795466141	],
    0.86	: [	0.63710902	,	0.5	,	0.780065217	],
    0.87	: [	0.7034097	,	0.571373626	,	0.830267296	],
    0.88	: [	0.748629869	,	0.618143939	,	0.869585346	],
    0.89	: [	0.769734647	,	0.636363636	,	0.886844864	],
    0.9	: [	0.794865325	,	0.666666667	,	0.913043478	],
    0.91	: [	0.811877117	,	0.675675676	,	0.926829268	],
    0.92	: [	0.869150995	,	0.739073227	,	0.967741935	],
    0.93	: [	0.84268485	,	0.6840311	,	0.962962963	],
    0.94	: [	0.872049406	,	0.714285714	,	1	],
    0.95	: [	0.885591965	,	0.714285714	,	1	],
    0.96	: [	1	,	1	,	1	],
    0.97	: [	1	,	1	,	1	],
    0.98	: [	1	,	1	,	1	],
    0.99	: [	1	,	1	,	1	],
    1	: [	1	,	1	,	1	]
}

const score_ORR_lookup_LLR5NSCLC = {
    0	: [	0	,	0	,	0	],
    0.01	: [	0	,	0	,	0	],
    0.02	: [	0	,	0	,	0	],
    0.03	: [	0	,	0	,	0	],
    0.04	: [	0	,	0	,	0	],
    0.05	: [	0	,	0	,	0	],
    0.06	: [	0	,	0	,	0	],
    0.07	: [	0	,	0	,	0	],
    0.08	: [	0	,	0	,	0	],
    0.09	: [	0	,	0	,	0	],
    0.1	: [	0	,	0	,	0	],
    0.11	: [	0	,	0	,	0	],
    0.12	: [	0	,	0	,	0	],
    0.13	: [	0	,	0	,	0	],
    0.14	: [	0	,	0	,	0	],
    0.15	: [	0	,	0	,	0	],
    0.16	: [	0	,	0	,	0	],
    0.17	: [	0	,	0	,	0	],
    0.18	: [	0	,	0	,	0	],
    0.19	: [	0	,	0	,	0	],
    0.2	: [	0	,	0	,	0	],
    0.21	: [	0	,	0	,	0	],
    0.22	: [	0	,	0	,	0	],
    0.23	: [	0	,	0	,	0	],
    0.24	: [	0	,	0	,	0	],
    0.25	: [	0.074551842	,	0	,	0.250657895	],
    0.26	: [	0.095422184	,	0	,	0.235294118	],
    0.27	: [	0.10801967	,	0	,	0.241405434	],
    0.28	: [	0.150798516	,	0.052631579	,	0.276625296	],
    0.29	: [	0.130954811	,	0.053547932	,	0.228097588	],
    0.3	: [	0.125037132	,	0.053547932	,	0.213114754	],
    0.31	: [	0.138265176	,	0.060583446	,	0.222263682	],
    0.32	: [	0.128753757	,	0.06023494	,	0.2	],
    0.33	: [	0.13659105	,	0.072130736	,	0.212416725	],
    0.34	: [	0.118160328	,	0.062013789	,	0.18487395	],
    0.35	: [	0.114542365	,	0.061395139	,	0.177981235	],
    0.36	: [	0.119219845	,	0.066115702	,	0.181818182	],
    0.37	: [	0.111212203	,	0.06059953	,	0.166694631	],
    0.38	: [	0.099835144	,	0.050320232	,	0.155042101	],
    0.39	: [	0.122424742	,	0.061883379	,	0.186467161	],
    0.4	: [	0.145014095	,	0.080339365	,	0.214984845	],
    0.41	: [	0.13462346	,	0.069306931	,	0.211145833	],
    0.42	: [	0.164781639	,	0.082352941	,	0.256123693	],
    0.43	: [	0.179003232	,	0.097552507	,	0.271428571	],
    0.44	: [	0.263997385	,	0.164336473	,	0.370385305	],
    0.45	: [	0.280235982	,	0.174603175	,	0.391916023	],
    0.46	: [	0.326174924	,	0.203695857	,	0.44643807	],
    0.47	: [	0.331476772	,	0.210495716	,	0.454545455	],
    0.48	: [	0.391317873	,	0.259981481	,	0.529411765	],
    0.49	: [	0.398120242	,	0.266632653	,	0.533372093	],
    0.5	: [	0.388977042	,	0.25	,	0.522754329	],
    0.51	: [	0.388405027	,	0.245273392	,	0.526393189	],
    0.52	: [	0.352524241	,	0.219478936	,	0.489823748	],
    0.53	: [	0.375820475	,	0.235294118	,	0.520855978	],
    0.54	: [	0.316238644	,	0.179487179	,	0.45960088	],
    0.55	: [	0.332675299	,	0.196078431	,	0.470780051	],
    0.56	: [	0.305271237	,	0.183295455	,	0.434782609	],
    0.57	: [	0.353181845	,	0.224489796	,	0.490196078	],
    0.58	: [	0.344349339	,	0.228050239	,	0.469387755	],
    0.59	: [	0.327268874	,	0.206292517	,	0.454545455	],
    0.6	: [	0.344610058	,	0.228070175	,	0.46437212	],
    0.61	: [	0.400028189	,	0.275849575	,	0.514717023	],
    0.62	: [	0.409298816	,	0.292307692	,	0.523076923	],
    0.63	: [	0.422780842	,	0.301547619	,	0.541018338	],
    0.64	: [	0.463018619	,	0.344237827	,	0.58490566	],
    0.65	: [	0.484530638	,	0.357142857	,	0.611940299	],
    0.66	: [	0.485727677	,	0.359928571	,	0.622700472	],
    0.67	: [	0.502764713	,	0.360639344	,	0.641037736	],
    0.68	: [	0.525132014	,	0.372093023	,	0.666666667	],
    0.69	: [	0.553718943	,	0.399895833	,	0.704545455	],
    0.7	: [	0.563487484	,	0.40527027	,	0.735390026	],
    0.71	: [	0.538868089	,	0.366590909	,	0.71875	],
    0.72	: [	0.643881322	,	0.434782609	,	0.840052632	],
    0.73	: [	0.625337226	,	0.408863636	,	0.818315508	],
    0.74	: [	0.61507833	,	0.374835526	,	0.833333333	],
    0.75	: [	0.607297407	,	0.333333333	,	0.857142857	],
    0.76	: [	0.729729712	,	0.416666667	,	1	],
    0.77	: [	0.730639551	,	0.41625	,	1	],
    0.78	: [	0.698840427	,	0.375	,	1	],
    0.79	: [	0.773503644	,	0.444444444	,	1	],
    0.8	: [	0.7962218	,	0.5	,	1	],
    0.81	: [	0.867085958	,	0.555555556	,	1	],
    0.82	: [	0.850266282	,	0.5	,	1	],
    0.83	: [	0.796085359	,	0.333333333	,	1	],
    0.84	: [	0.732479139	,	0.25	,	1	],
    0.85	: [	0.733857995	,	0.254464286	,	1	],
    0.86	: [	0.733857995	,	0.254464286	,	1	],
    0.87	: [	0.650129449	,	0	,	1	],
    0.88	: [	1	,	1	,	1	],
    0.89	: [	1	,	1	,	1	],
    0.9	: [	1	,	1	,	1	],
    0.91	: [	1	,	1	,	1	],
    0.92	: [	1	,	1	,	1	],
    0.93	: [	1	,	1	,	1	],
    0.94	: [	1	,	1	,	1	],
    0.95	: [	1	,	1	,	1	],
    0.96	: [	1	,	1	,	1	],
    0.97	: [	1	,	1	,	1	],
    0.98	: [	1	,	1	,	1	],
    0.99	: [	1	,	1	,	1	],
    1	: [	1	,	1	,	1	]
}

// Export
const CONSTANTS = { MIN_AGE, MAX_AGE, MIN_TMB, MAX_TMB, MIN_PDL1, MAX_PDL1, MIN_Albumin, MAX_Albumin, MIN_NLR, MAX_NLR,
score_ORR_lookup_LLR6Pan, score_ORR_lookup_LLR6NSCLC, score_ORR_lookup_LLR5Pan, score_ORR_lookup_LLR5NSCLC };