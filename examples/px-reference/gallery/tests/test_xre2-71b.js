px.import("px:scene.1.js").then( function ready(scene) {

scene.create({t:"textBox", text:"textA",fontUrl:"http://54.146.54.142/tom/receiverdotjs/fonts/XFINITYSansTT-New-Med.ttf",y:0,h:36,w:100,parent:scene.root,textColor:0xFFDDFFFF,pixelSize:16});

setTimeout(function() 
{ 
  scene.create({t:"textBox", text:"textB",fontUrl:"http://54.146.54.142/tom/receiverdotjs/fonts/XFINITYSansTT-New-Med.ttf",y:50,h:36,w:100,parent:scene.root,textColor:0xFFDDFFFF,pixelSize:20
  }); 
  }, 
  3000);

}).catch( function importFailed(err){
  console.error("Import failed for test_xre2-71b.js: " + err)
});
