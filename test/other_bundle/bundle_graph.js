module.exports = {
   "stealconfig":{
      "load":{
         "name":"stealconfig",
      },
      "bundles":[
         "bundle",
         "app_a",
         "app_b",
         "app_c",
         "app_d"
      ]
   },
   "steal/dev":{
      "bundles":[
         "bundle",
         "app_a",
         "app_b",
         "app_c",
         "app_d"
      ]
   },
   "bundle":{
      "deps":[],
      "dependencies":[],
      "bundles":[
         "bundle"
      ]
   },
   "app_a":{
      "deps":[
         "dep_a_b",
         "dep_all"
      ],
      "dependencies":[
         "dep_a_b",
         "dep_all"
      ],
      "bundles":[
         "app_a"
      ]
   },
   "dep_a_b":{
      "deps":[],
      "dependencies":[],
      "bundles":[
         "app_a",
         "app_b"
      ]
   },
   "dep_all":{
      "deps":[],
      "dependencies":[],
      "bundles":[
         "app_a",
         "app_b",
         "app_c",
         "app_d"
      ]
   },
   "app_b":{
      "deps":[
         "dep_a_b",
         "./dep_all"
      ],
      "dependencies":[
         "dep_a_b",
         "dep_all"
      ],
      "bundles":[
         "app_b"
      ]
   },
   "app_c":{
      "deps":[
         "./dep_all"
      ],
      "dependencies":[
         "dep_all"
      ],
      "bundles":[
         "app_c"
      ]
   },
   "app_d":{
      "deps":[
         "./dep_all"
      ],
      "dependencies":[
         "dep_all"
      ],
      "bundles":[
         "app_d"
      ]
   }
};