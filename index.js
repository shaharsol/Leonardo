
// Steps Stages
// ----------------
//* Add leonardo module as a dependancy to your app
//* You done
export default angular.module('example', ['leonardo'])
            .run(run);

//well almost...
function run(configuration){

  // Adding states
  // ----------------
  //* via api
  //* via ui - coming soon...
  configuration.upsert({ state: 'state1', name: 'get url1 aaaa', url: 'http://url1.com', status: 200, data: ["url1 aaa"]});
  configuration.upsertMany([
    { state: 'state1', name: 'get url1 bbbb', status:200,  data: ["url1 bbb"]},
    { url: 'http://url1.com', name: 'get url1 cccc', status:200,  data: ["url1 ccc"]},
    { url: 'http://url2.com', name: 'get url2 a', status:200,  data: ["url2 aaa"]},
    { url: 'http://url2.com', name: 'get url2 b', status:200,  data: ["url2 bbb"]}
  ]);


  // Setting options
  // ----------------
  //* via api
  //* via ui
}
