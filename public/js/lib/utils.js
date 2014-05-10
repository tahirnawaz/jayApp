window.backboneHistoryState = false;
var data_definition = {};
var data_collection = {};
var visualizerConfig = [];
var AllNotifications = [];
var workflowJobs = [];

var appModel = "";
//var visualizerConfig = {};
var gaugeConfig = [];
var pointsColor = [];
var colorKey = "";
var graphTitle = "";
var pivotsToShow = [];
var graphData = '';
var gaugeData;
var classes = [];
var unstructured_columns = [];
var unstructured_data = '';
var pivotPoints = [];
var attribValues = [];
var y_axis = "";

var filterContainers = [];
var filterFields = [];
var filtersSchema = [];
var filterDocs = [];
var realTimeLabel = '';
var filterDocsData = [];
var realTimePivotes = [];

var aggregationDoc = '';
var aggregationPivots = [];

var algoDataSet = {};

var delimiter = [];
//var chart;

var graphTimers = [];

var gTimer = {};
gTimer.div = '';
gTimer.timer = 0;
gTimer.startFrom = 0;
gTimer.docs = [];

var filterCounter = 1;
var types = [];



var schemaHtmlSelectOptions = "";
var fieldsHtmlSelectOptions = "";
var eachSchemaFields = [];

var AllNotifications = "";
var map;
var infoBubble;
var cities = [{name:"Seattle", lat:47.6097, long: -122.3331, msg:[] },{name:"Los Angeles", lat:34.0522, long: -118.2428, msg:[] },{name:"New York", lat:40.7142, long: -74.0064, msg:[] },{name:"Chicago", lat:41.8500, long: -87.6500, msg:[] },{name:"Dallas", lat:32.7828, long: -96.8039, msg:[] }];
var marker, mapi;
var markers=[]
var markers = [];
var kpiZoomData = [];
var datatypes = [];
////////////////////////////////////////////HIerarchy Graph Code////////////////////////////////////
var hieRoot;
var hieTree;
var vis;
var diagonal;
var remainingKeys=[];
var remainingKeysData=[];
var stats_doc = [];
var math_schema ={xAxis:'',yAxis:''};
var math_result = [];
var math_expression_fields = [];
var dataResultAggregation = [];
var expressionsList = [];
var expressionFieldsArray = [];
var statZoomData = {};
var mathZoomData = {};
var graphHistory =[];
var graphHistoryFlag = false;
var Math_Operator = ['sum','subtract','division','multiplication','abs','acos','asin','ceil','cos','exp','floor','log','round','sin','sqrt','tan'];
var Stat_Functions = ['Linear Regression','Multiple Regression','Pearson-Correlation','Cumulative-Frequency','Frequency-Distribution','Histograms','Descriptive-Sampling','ANOVA(One-Way)','T-Test','Spearman Rank Correlation','Trend Line','Student T Test','Chi-Square'];
var colorsArray=['#00cc00','#0066b3','#ff8000','#ffcc00','#330099','#990099','#ccff00','#ff0000','#808080','#008f00','#00487d','#b35a00','#b38f00','#6b006b','#8fb300','#b30000','#bebebe','#80ff80','#80c9ff','#ffc080','#ffe680','#aa80ff','#ee00cc','#ff8080','#666600','#ffbfff','#00ffcc','#cc6699','#999900','#00cc00','#0066b3','#ff8000','#ffcc00','#330099','#990099','#ccff00','#ff0000','#808080','#008f00','#00487d','#b35a00','#b38f00','#6b006b','#8fb300','#b30000','#bebebe','#80ff80','#80c9ff','#ffc080','#ffe680','#aa80ff','#ee00cc','#ff8080','#666600','#ffbfff','#00ffcc','#cc6699','#999900','#00cc00','#0066b3','#ff8000','#ffcc00','#330099','#990099','#ccff00','#ff0000','#808080','#008f00','#00487d','#b35a00','#b38f00','#6b006b','#8fb300','#b30000','#bebebe','#80ff80','#80c9ff','#ffc080','#ffe680','#aa80ff','#ee00cc','#ff8080','#666600','#ffbfff','#00ffcc','#cc6699','#999900'];
var sizeArray=[];
var customTransformationObject = [];

////////////////////////////////////////////HIerarchy Graph Code////////////////////////////////////
window.utils = {

    getOozieDateTime : function(dateString){

        var date = new Date(dateString);
        // example 2013-12-11T14:20Z
        // month has zero based indexing
        var time= date.getFullYear() + '-' +
            (((date.getMonth()+ 1).toString().length==1)?('0'+(date.getMonth()+1).toString()):(date.getMonth()+1)) + '-' +
            ((date.getDate().toString().length==1)?('0'+date.getDate().toString()):(date.getDate())) + 'T' +
            ((date.getHours().toString().length==1)?('0'+date.getHours().toString()):(date.getHours()))+':'+
            ((date.getMinutes().toString().length==1)?('0'+date.getMinutes().toString()):(date.getMinutes()))+'Z';
        return time;

    },
    loading: function(command,message){
        //alert(command);
        if(command != '' && typeof command != "undefined"){
            if (command == true || command.toLowerCase() == 'show'  ) {
                $(".loading").css("z-index","10001");
                if(message!=""&&typeof message!="undefined")
                    $('#loadingText').html(message);
                else
                    $('#loadingText').html("Loading...");
                $(".loading-inner").show();
            }
            else if(command == false || command.toLowerCase() == 'hide'  ){
                $(".loading").css("z-index","-2");
                $(".loading-inner").fadeOut();
            }
        }
    },
    showLoader: function(){
        var w = $("#main").width();
        var h = $("#main").height();
        var lcw = $(".left-container-wrap").width();
        var lw = $(".loader").width();
        var lh = $(".loader").height();

        var loaderMidWidth = lw / 2;
        var loaderMidHeight = lh / 2;

        var midWidth = w / 2;
        var width = midWidth + lcw - loaderMidWidth;
        var height = h / 2 - loaderMidHeight;

        $("#main").css("opacity","0.5");

        $(".loader").css({"left": width+"px","top": height+"px"});
        $(".loader").show();

    },
    hideLoader: function(){
        $("#main").css("opacity","1");
        $(".loader").hide();
    },
    overlayLoader: function(parent, command, img){
        var h = "";
        var t = "";
        var tt = "";
        var w = $("#"+parent).width();
        var hh = $("#"+parent).height();

        if (hh == 0){
            h = "auto";
        } else {
            h = hh+"px";
        }
        tt = hh-32;
        tt = parseInt(tt/2);
        t = tt+"px";

        if (w == 0){
            w = "100%";
        } else {
            w = w+"px";
        }

        if (command != "" && typeof command != "undefined"){

            if (command == true || command.toLowerCase() == "show"){
                utils.loading(command);
                if (img == "yes"){
                    $("#"+parent).append('<div class="my-loader"><div class="my-loader-overlay" style="width:'+w+'; height:'+h+';"></div>' +
                        '<div class="my-loader-img" style="text-align: center; top:'+t+'; width:'+w+';/* height:'+h+';*/">' +
                        '<img src="images/data_loader.gif" alt="loader">' +
                        '</div></div>');
                } else {
                    $("#"+parent).append('<div class="my-loader"><div class="my-loader-overlay" style="width:'+w+'; height:'+h+';"></div></div>');
                }
            } else if (command == false || command.toLowerCase() == "hide"){
                utils.loading(command);
                $("#"+parent).find(".my-loader").remove();
            }
        }
    },
    updateJobStatus:function(socketJobStatus){
        var data = socketJobStatus.data;
        /*workflowId, jobName, status*/
        if(typeof data['workflowId'] != "undefined" ){
            var workflowId = data['workflowId'];
            if(typeof data['jobName'] != "undefined" ){
                // update last runtime
                $('#'+workflowId+"JobName").html(data['jobName']);
            }
            if(typeof data['status'] != "undefined" ){
                // update execution time
                $('#'+workflowId+"JobStatus").html(data['status']);
            }
        }

    },
    updateStats : function(socketNotification){

//        console.log(socketNotification);

        var data = socketNotification.data;
        var streamId = data.streamId;

        if($('#data_streams').val() == streamId){
            if(typeof data['jobName'] != "undefined" ){
                var jobName = data['jobName'];

                if (jobName==""){
                    $('#jobNameTT').tooltip({placement: 'top', title: '<div class="tooltip-text">No job in process</div>', html: true});
                } else {
                    $('#jobNameTT').tooltip({placement: 'top', title: '<div class="tooltip-text">'+jobName+'</div>', html: true});
                    if (data['jobName'].length>8){
                        jobName = jobName.slice(0,8);
                        jobName += "..."
                        $('#jobName').html(jobName);
                    } else {
                        $('#jobName').html(jobName);
                    }
                    // update job name
                }
            }
            if(typeof data['lastRunTime'] != "undefined" ){

                // update last runtime

                $('#lastRunTime').html(data['lastRunTime']);

            }
            if(typeof data['execTime'] != "undefined" ){

                // update execution time
                $('#execTime').html(data['execTime']);
            }
            if(typeof data['notificationCount'] != "undefined" ){

                // update last notification
//                var newValue = parseInt(data['newNotification']);
//                var oldValue = ($('#notificationCount').html()=="")?0:parseInt($('#notificationCount').html());

                $('#notificationCount').html(data['notificationCount']);
            }
            if(typeof data['rawDataCount'] != "undefined" ){

                // update last update new record
//                var oldValue = ($('#rowCount').html()=="")?0:parseInt($('#rowCount').html());

                $('#rowCount').html(data['rawDataCount']);

//                var newValue = parseInt(data['newRecord']);
                /*    alert(parseInt($('#newRecord').html()));
                 alert($('#newRecord').html());
                 var oldValue = (typeof $('#newRecord').html()=="undefined")?0:parseInt($('#newRecord').html());*/
//                $('#rowCount').html(oldValue + 1);
            }
            if(typeof data['jobsCompleted'] != "undefined" && typeof data['totalJobs'] != "undefined"  ){

                var jobsCompleted = parseInt(data['jobsCompleted']);
                var totalJobs = parseInt(data['totalJobs']);
                var percent = Math.round((jobsCompleted/totalJobs)*100);

                $('#gaugeVal').data('easyPieChart').update(percent);
                $('#titleValue').html(percent);

                $('#jobsCompleted').html(jobsCompleted + "/" + totalJobs);

            }
        }

    },
    removeChildsUsingKey : function(treeElement,keyToWhichAddNode){

        var nodeToWhichAddNode = $(treeElement).dynatree('getTree').getNodeByKey(keyToWhichAddNode);

        if(nodeToWhichAddNode.hasChildren)  // remove any children because our schema will contain nodes of one source only
        {
            nodeToWhichAddNode.removeChildren();
        }

    },
    addNodeToTree : function(treeElement,keyToWhichAddNode,nodeObject){

        var nodeToWhichAddNode = $(treeElement).dynatree('getTree').getNodeByKey(keyToWhichAddNode);
        nodeToWhichAddNode.addChild(nodeObject);
    },

    getFieldsAndSchemasByStreamId : function(stream){

        schemaHtmlSelectOptions = '';
        fieldsHtmlSelectOptions = '';
        eachSchemaFields = [];
        /*$.ajax({
         url: "streams/findById/"+stream_id,
         async:false,
         success: function(res){

         var stream = res.doc[0];*/
        //  console.log(stream.allSchemaFields);
        var fieldsHtml = "";
        var fields1 = [];
        var group=  _
            .chain(stream.allSchemaFields)
            .groupBy('selectGroup')
            .map(function(value, key) {
                return {
                    type: key,
                    fieldAlias: _.pluck(value, 'fieldAlias'),
                    fieldType: _.pluck(value,'fieldType'),
                    fieldId: _.pluck(value,'fieldId'),
                    selectGroup: _.pluck(value,'selectGroup'),
                    schemaType: _.pluck(value,'schemaType'),
                    schemaId: _.pluck(value,'schemaId')
                }
            })
            .value();
        //var group = _.groupBy(stream.allSchemaFields,'selectGroup');

        for(var i=0;i<group.length;i++)
        {
            var typeObj=group[i];
            if(typeObj.type=="transformation")
            {


                fieldsHtmlSelectOptions += '<optgroup label="Transformations">';
                fieldsHtml += '<optgroup label="Transformations">';
                for(var j=0;j<typeObj.fieldAlias.length;j++)
                {
                    fieldsHtmlSelectOptions += '<option data-selectGroup='+typeObj.selectGroup+'  data-schemaType='+typeObj.schemaType+' data-schemaId='+typeObj.schemaId+' data-fieldType='+typeObj.fieldType[j]+' data-fieldId='+typeObj.fieldId[j]+' value="'+typeObj.fieldAlias[j]+'">'+typeObj.fieldAlias[j] +'</option>';
                    fieldsHtml += '<option data-selectGroup='+typeObj.selectGroup+'  data-schemaType='+typeObj.schemaType+' data-schemaId='+typeObj.schemaId+' data-fieldType='+typeObj.fieldType[j]+' data-fieldId='+typeObj.fieldId[j]+' value="'+typeObj.fieldAlias[j]+'">'+typeObj.fieldAlias[j] +'</option>';

                }

                fieldsHtmlSelectOptions += '</optgroup>';
                fieldsHtml += '</optgroup>';
            }
            else if(typeObj.type=="mapping")
            {

                fieldsHtmlSelectOptions += '<optgroup label="Mapping">';
                fieldsHtml += '<optgroup label="Mapping">';
                for(var j=0;j<typeObj.fieldAlias.length;j++)
                {
                    fieldsHtmlSelectOptions += '<option data-selectGroup='+typeObj.selectGroup+'  data-schemaType='+typeObj.schemaType+' data-schemaId='+typeObj.schemaId+' data-fieldType='+typeObj.fieldType[j]+' data-fieldId='+typeObj.fieldId[j]+' value="'+typeObj.fieldAlias[j]+'">'+typeObj.fieldAlias[j] +'</option>';
                    fieldsHtml += '<option data-selectGroup='+typeObj.selectGroup+'  data-schemaType='+typeObj.schemaType+' data-schemaId='+typeObj.schemaId+' data-fieldType='+typeObj.fieldType[j]+' data-fieldId='+typeObj.fieldId[j]+' value="'+typeObj.fieldAlias[j]+'">'+typeObj.fieldAlias[j] +'</option>';

                }

                fieldsHtmlSelectOptions += '</optgroup>';
                fieldsHtml += '</optgroup>';
            }
            else
            {

                fieldsHtmlSelectOptions += '<optgroup label="'+typeObj.type+'">';
                fieldsHtml += '<optgroup label="'+typeObj.type+'">';
                for(var j=0;j<typeObj.fieldAlias.length;j++)
                {
                    fieldsHtmlSelectOptions += '<option data-selectGroup='+typeObj.selectGroup+'  data-schemaType='+typeObj.schemaType+' data-schemaId='+typeObj.schemaId+' data-fieldType='+typeObj.fieldType[j]+' data-fieldId='+typeObj.fieldId[j]+' value="'+typeObj.fieldAlias[j]+'">'+typeObj.fieldAlias[j] +'</option>';
                    fieldsHtml += '<option data-selectGroup='+typeObj.selectGroup+'  data-schemaType='+typeObj.schemaType+' data-schemaId='+typeObj.schemaId+' data-fieldType='+typeObj.fieldType[j]+' data-fieldId='+typeObj.fieldId[j]+' value="'+typeObj.fieldAlias[j]+'">'+typeObj.fieldAlias[j] +'</option>';

                }

                fieldsHtmlSelectOptions += '</optgroup>';
                fieldsHtml += '</optgroup>';
            }

        }

        $.each(stream.allSchemaFields,function(index,schema){
            //for(var t=0;t<stream.allSchemaFields.length;t++){
            //schemaHtmlSelectOptions += '<option data-datadefinitionid="'+schema[index]+'" value="'+schema._id+'">'+schema.data_definition_name+'</option>';


            //$.each(schema.structure,function(index,structure){
            //fieldsHtmlSelectOptions += '<option data-selectGroup='+schema.selectGroup+'  data-schemaType='+schema.schemaType+' data-schemaId='+schema.schemaId+' data-fieldType='+schema.fieldType+' data-fieldId='+schema.fieldId+' value="'+schema.fieldAlias+'">'+schema.fieldAlias +'</option>';
            //fieldsHtml += '<option data-selectGroup='+schema.selectGroup+'  data-schemaType='+schema.schemaType+' data-schemaId='+schema.schemaId+' data-fieldType='+schema.fieldType+' data-fieldId='+schema.fieldId+' value="'+schema.fieldAlias+'">'+schema.fieldAlias +'</option>';
            fields1.push(schema.fieldAlias);
            //});

            //console.log(schema);

        });
        eachSchemaFields.push({/*schema_id : stream._id,*/ fieldsHtml:fieldsHtml , schemaFields: fields1});


        /*}
         });*/
    },
    getNativeFieldsAndSchemasByStreamId : function(stream){

        schemaHtmlSelectOptions = '<option value="0"> Select Schema </option>';
        fieldsHtmlSelectOptions = "";
        eachSchemaFields = [];
        /*$.ajax({
         url: "streams/findById/"+stream_id,
         async:false,
         success: function(res){

         var stream = res.doc[0];*/

        $.each(stream.schemas,function(index,schema){

            if(schema.type == "native"){
                schemaHtmlSelectOptions += '<option data-datadefinitionid="'+schema.data_definition_id+'" value="'+schema._id+'">'+schema.data_definition_name+'</option>';

                var fieldsHtml = "";
                var fields1 = [];
                $.each(schema.structure,function(index,structure){
                    fieldsHtmlSelectOptions += '<option value="'+structure.alias+'">'+structure.alias +'</option>';
                    fieldsHtml += '<option value="'+structure.alias+'">'+structure.alias +'</option>';
                    fields1.push(structure.alias);

                });

                eachSchemaFields.push({schema_id : schema._id, fieldsHtml:fieldsHtml , schemaFields: fields1});
            }

        });
        /*}
         });*/
    },
    scrollerAdjustment : function(element){
        var h = $(window).height();
        var fh = h-300;
        $(element).css("height",fh);
    },
    highChartRealTimeGraph : function(table,streamId,startTime,endTime,timezone,aggLevel,e,start,end,fields_to_monitor,initialize){

        $.ajax({
            url:Constants.URL_PREFIX+"/visualizer/"+table+"/"+streamId+"/"+"na"+"/"+startTime+"/"+endTime+"/"+timezone+"/"+aggLevel+"/"+e+"/"+start+"/"+end+"/na",
            success: function(response){

                var response_data = $.parseJSON(response);
                var docs = $.parseJSON(response_data[0].docs);
                var schema = $.parseJSON(response_data[0].schema);

                if(typeof response_data[0].docs != "undefined"){

                    var containerDiv = 'real_time';
                    var series = [];

                    $.each(fields_to_monitor,function(index,field){
                        series.push({name:field,data:[]});
                    });

                    var initialFeed= (response_data[0].docs.length > 15)?15:response_data[0].docs.length;

                    for(var i=0; i < initialFeed;i++ ){

                        var record = docs[i];
                        for (var key in record){

                            var datetime =  new Date(parseInt(record.timestamp));
                            var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
                            for(var j = 0; j < series.length; j++ ){

                                if(key.toLowerCase() == series[j].name.toLowerCase() && typeof record[key] != "undefined"){

                                    if( record[key]==""){
                                        series[j].data.push([timestamp,0]);
                                    }else if(isNaN(parseInt(record[key]))== false){
                                        series[j].data.push([timestamp,parseInt(record[key])]);
                                    }else{
                                        series[j].data.push([timestamp,0]);
                                    }
                                }
                            }
                        }
                    }

                    var options = {

                        credits: {
                            enabled: false
                        },
                        title: {
                            text: 'Data Extraction Monitor'
                        },
                        chart: {
                            renderTo: containerDiv
                        },

                        xAxis: {

                            type: 'datetime'

                        },

                        series: series
                    };

                    var graphFound = false;
                    $.each(graphTimers,function(index,graph){
                        if(graph.div == containerDiv){
                            $('#'+containerDiv).unbind();
                            clearInterval(graph.timer);
                            graphFound = true;
                        }
                    });

                    if(!graphFound){
                        graphTimers.push({div:containerDiv,timer:"",startFrom:initialFeed,docs:docs});
                    }

                    var chart = new Highcharts.Chart(options);

//                    i = initialFeed;

                    for(var k = 0; k < graphTimers.length; k++){


                        if(graphTimers[k].div == containerDiv){
                            var containerDiv = graphTimers[k].div;
                            var docs = graphTimers[k].docs;
                            var i = graphTimers[k].startFrom;
                            var timer = setInterval(function(){

                                if(i < docs.length && typeof $('#'+containerDiv).highcharts() != "undefined"){

                                    var record = docs[i];
                                    for (var key in record){

                                        var datetime =  new Date(parseInt(record.timestamp));
                                        var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
                                        for(var j = 0; j < series.length; j++ ){

                                            if(key.toLowerCase() == series[j].name.toLowerCase() && typeof record[key] != "undefined"){

                                                if(series.length > 1 && j == series.length - 1)
                                                {
                                                    if( record[key]==""){
                                                        $('#'+containerDiv).highcharts().series[j].addPoint([timestamp,0],false,true);
                                                    }else if(isNaN(parseInt(record[key]))== false){
                                                        $('#'+containerDiv).highcharts().series[j].addPoint([timestamp,parseInt(record[key])],false,true);
                                                    }else{
                                                        $('#'+containerDiv).highcharts().series[j].addPoint([timestamp,0],false,true);
                                                    }
                                                }else{
                                                    if( record[key]==""){
                                                        $('#'+containerDiv).highcharts().series[j].addPoint([timestamp,0],true,true);
                                                    }else if(isNaN(parseInt(record[key]))== false){
                                                        $('#'+containerDiv).highcharts().series[j].addPoint([timestamp,parseInt(record[key])],true,true);
                                                    }else{
                                                        $('#'+containerDiv).highcharts().series[j].addPoint([timestamp,0],true,true);
                                                    }
                                                }

                                            }
                                        }
                                    }
                                    i++;

                                }else{
                                    //console.log("timer stoped");
                                    clearInterval(timer);
                                }

                            },1200);
                            graphTimers[k].timer = timer;
                        }
                    }


                    /*$.each(graphTimers,function(index,graph){

                     if(graph.div == containerDiv){
                     graphTimers[index].timer = timer;
                     }
                     });*/
                }
            }
        });
    },
    realTimeGraph : function(pivots,docs,containerDiv,label_field){
        var series = [];
        $.each(pivots,function(index,field){
            series.push({name:field,data:[]});
        });
        var tooltipKeyword = [];
        var initialFeed= (docs.length > 15)?15:docs.length;
        utils.overlayLoader("real_time_wrap", "hide", "no");
        //var keyword= "keywordsV6:Keyword";
        for(var i=0; i < initialFeed;i++ ){
            var record = docs[i];
            for (var key in record){
                //var recordkey = record[colorKey];

                var datetime =  new Date(parseInt(record.timestamp));
                var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
                for(var j = 0; j < series.length; j++ ){
                    if(key.toLowerCase() == series[j].name.toLowerCase() && typeof record[key] != "undefined"){
                        var color = (typeof pointsColor[record[colorKey]] == 'undefined' )?null:pointsColor[record[colorKey]];
                        if( record[key]==""){
                            tooltipKeyword["0"] = [];
                            if(label_field == ''){
                                tooltipKeyword["0"].push(record[key]);
                            }else{
                                tooltipKeyword["0"].push(record[label_field]);
                            }
//                            series[j].data.push([timestamp,0]);
                            series[j].data.push({x:timestamp,y:0,color:color,marker:{fillColor:color,lineColor:color,states:{hover:{fillColor:color,lineColor:color}}}});
                        }
                        else if(isNaN(parseInt(record[key]))== false){
                            tooltipKeyword[record[key]] = [];
                            if(label_field == ''){
                                tooltipKeyword[record[key]].push(record[key]);
                            }else{
                                tooltipKeyword[record[key]].push(record[label_field]);
                            }

//                            series[j].data.push([timestamp,parseInt(record[key])]);
                            series[j].data.push({x:timestamp,y:parseInt(record[key]),color:color,marker:{fillColor:color,lineColor:color,states:{hover:{fillColor:color,lineColor:color}}}});
                            //console.log(record[key]);
                        }
                        else{
                            tooltipKeyword["0"] = [];
                            if(label_field == ''){
                                tooltipKeyword["0"].push(record[key]);
                            }else{
                                tooltipKeyword["0"].push(record[label_field]);
                            }
//                            series[j].data.push([timestamp,0]);
                            series[j].data.push({x:timestamp,y:0,color:color,marker:{fillColor:color,lineColor:color,states:{hover:{fillColor:color,lineColor:color}}}});
                        }
                    }
                }
            }
        }
        //console.log(tooltipKeyword);
        var options = {

            credits: {
                enabled: false
            },
            title: {
                text: 'Data Extraction Monitor'
            },
            chart: {
                renderTo: containerDiv
            },

            xAxis: {

                type: 'datetime'

            },
            tooltip: {
                formatter: function(){
                    return tooltipKeyword[this.y][0]+ " : " + this.y;
                }
            },
            series: series
        };



        var chart = new Highcharts.Chart(options);
        var graphFound = false;
        $('#'+containerDiv).unbind();
        clearInterval(gTimer.timer);
        graphFound = true;
        //if(!graphFound){
        gTimer.div = containerDiv;
        gTimer.startFrom = initialFeed;
        gTimer.docs = docs;
        //}
        i = initialFeed;
        containerDiv = gTimer.div;
        var docs = gTimer.docs;
        var i = gTimer.startFrom;
        var self = this;
        var limit = parseInt($("#real_time_limit option:selected").val());

        var timer = setInterval(function(){
            if(i < docs.length && typeof $('#'+containerDiv).highcharts() != "undefined"){
                var record = docs[i];
                for (var key in record){
                    var datetime =  new Date(parseInt(record.timestamp));
                    var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
                    for(var j = 0; j < series.length; j++ ){
                        if(key.toLowerCase() == series[j].name.toLowerCase() && typeof record[key] != "undefined"){
                            var color = (typeof pointsColor[record[colorKey]] == 'undefined' )?null:pointsColor[record[colorKey]];
                            if(series.length > 1 && j == series.length - 1)
                            {
                                if( record[key]==""){
                                    tooltipKeyword["0"] = [];
                                    if(label_field == ''){
                                        tooltipKeyword["0"].push(record[key]);
                                    }else{
                                        tooltipKeyword["0"].push(record[label_field]);
                                    }
                                    $('#'+containerDiv).highcharts().series[j].addPoint({x:timestamp,y:0,color:color,marker:{fillColor:color,lineColor:color,states:{hover:{fillColor:color,lineColor:color}}}},false,true);
                                }else if(isNaN(parseInt(record[key]))== false){
                                    tooltipKeyword[record[key]] = [];
                                    if(label_field == ''){
                                        tooltipKeyword[record[key]].push(record[key]);
                                    }else{
                                        tooltipKeyword[record[key]].push(record[label_field]);
                                    }
                                    $('#'+containerDiv).highcharts().series[j].addPoint({x:timestamp,y:parseInt(record[key]),color:color,marker:{fillColor:color,lineColor:color,states:{hover:{fillColor:color,lineColor:color}}}},false,true);
                                }else{
                                    tooltipKeyword["0"] = [];
                                    if(label_field == ''){
                                        tooltipKeyword["0"].push(record[key]);
                                    }else{
                                        tooltipKeyword["0"].push(record[label_field]);
                                    }
                                    $('#'+containerDiv).highcharts().series[j].addPoint({x:timestamp,y:0,color:color,marker:{fillColor:color,lineColor:color,states:{hover:{fillColor:color,lineColor:color}}}},false,true);
                                }
                            }
                            else{
                                if( record[key]==""){
                                    tooltipKeyword["0"] = [];
                                    if(label_field == ''){
                                        tooltipKeyword["0"].push(record[key]);
                                    }else{
                                        tooltipKeyword["0"].push(record[label_field]);
                                    }
                                    $('#'+containerDiv).highcharts().series[j].addPoint({x:timestamp,y:0,color:color,marker:{fillColor:color,lineColor:color,states:{hover:{fillColor:color,lineColor:color}}}},true,true);
                                }else if(isNaN(parseInt(record[key]))== false){
                                    tooltipKeyword[record[key]] = [];
                                    if(label_field == ''){
                                        tooltipKeyword[record[key]].push(record[key]);
                                    }else{
                                        tooltipKeyword[record[key]].push(record[label_field]);
                                    }
                                    $('#'+containerDiv).highcharts().series[j].addPoint({x:timestamp,y:parseInt(record[key]),color:color,marker:{fillColor:color,lineColor:color,states:{hover:{fillColor:color,lineColor:color}}}},true,true);
                                }else{
                                    tooltipKeyword["0"] = [];
                                    if(label_field == ''){
                                        tooltipKeyword["0"].push(record[key]);
                                    }else{
                                        tooltipKeyword["0"].push(record[label_field]);
                                    }
                                    $('#'+containerDiv).highcharts().series[j].addPoint({x:timestamp,y:0,color:color,marker:{fillColor:color,lineColor:color,states:{hover:{fillColor:color,lineColor:color}}}},true,true);
                                }
                            }
                        }
                    }
                }
                i++;
            }
            else if(i == docs.length && typeof $('#'+containerDiv).highcharts() != "undefined"){
                initialFeed = i;//docs.length;
                var stream_id = $("#data_streams option:selected").val();
                //var limit_start = (i+1);
                var limit_start = (limit + 1);
                var upTo = $("#real_time_limit option:selected").val();
                $.ajax({
                    url:Constants.URL_PREFIX+"/visualizer/streams/"+stream_id+"/"+"na"+"/"+"na"+"/"+"na"+"/"+"na"+"/"+"na"+"/"+"-1"+"/"+limit_start+"/"+upTo+"/na",
                    async:false,
                    success: function(response){
                        limit  = (limit + parseInt($("#real_time_limit option:selected").val()));
                        var response_data = $.parseJSON(response);
                        if(typeof response_data[0].docs !='undefined' && response_data[0].docs.length>0){
                            var data = $.parseJSON(response_data[0].docs);
                            docs = self.filterResults(data,docs);
                            gTimer.div = containerDiv;
                            gTimer.startFrom = initialFeed;
                            gTimer.docs = docs;
                            if(i < docs.length && typeof $('#'+containerDiv).highcharts() != "undefined"){

                                if(docs[i]){
                                    var record = docs[i];
                                    for (var key in record){
                                        var datetime =  new Date(parseInt(record.timestamp));
                                        var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
                                        for(var j = 0; j < series.length; j++ ){
                                            if(key.toLowerCase() == series[j].name.toLowerCase() && typeof record[key] != "undefined"){
                                                var color = (typeof pointsColor[record[colorKey]] == 'undefined' )?null:pointsColor[record[colorKey]];
                                                if(series.length > 1 && j == series.length - 1)
                                                {
                                                    if( record[key]==""){
                                                        tooltipKeyword["0"] = [];
                                                        if(label_field == ''){
                                                            tooltipKeyword["0"].push(record[key]);
                                                        }else{
                                                            tooltipKeyword["0"].push(record[label_field]);
                                                        }
                                                        $('#'+containerDiv).highcharts().series[j].addPoint({x:timestamp,y:0,color:color,marker:{fillColor:color,lineColor:color,states:{hover:{fillColor:color,lineColor:color}}}},false,true);
                                                    }else if(isNaN(parseInt(record[key]))== false){
                                                        tooltipKeyword[record[key]] = [];
                                                        if(label_field == ''){
                                                            tooltipKeyword[record[key]].push(record[key]);
                                                        }else{
                                                            tooltipKeyword[record[key]].push(record[label_field]);
                                                        }
                                                        $('#'+containerDiv).highcharts().series[j].addPoint({x:timestamp,y:parseInt(record[key]),color:color,marker:{fillColor:color,lineColor:color,states:{hover:{fillColor:color,lineColor:color}}}},false,true);
                                                    }else{
                                                        tooltipKeyword["0"] = [];
                                                        if(label_field == ''){
                                                            tooltipKeyword["0"].push(record[key]);
                                                        }else{
                                                            tooltipKeyword["0"].push(record[label_field]);
                                                        }
                                                        $('#'+containerDiv).highcharts().series[j].addPoint({x:timestamp,y:0,color:color,marker:{fillColor:color,lineColor:color,states:{hover:{fillColor:color,lineColor:color}}}},false,true);
                                                    }
                                                }
                                                else{
                                                    if( record[key]==""){
                                                        tooltipKeyword["0"] = [];
                                                        if(label_field == ''){
                                                            tooltipKeyword["0"].push(record[key]);
                                                        }else{
                                                            tooltipKeyword["0"].push(record[label_field]);
                                                        }
                                                        $('#'+containerDiv).highcharts().series[j].addPoint({x:timestamp,y:0,color:color,marker:{fillColor:color,lineColor:color,states:{hover:{fillColor:color,lineColor:color}}}},true,true);
                                                    }else if(isNaN(parseInt(record[key]))== false){
                                                        tooltipKeyword[record[key]] = [];
                                                        if(label_field == ''){
                                                            tooltipKeyword[record[key]].push(record[key]);
                                                        }else{
                                                            tooltipKeyword[record[key]].push(record[label_field]);
                                                        }
                                                        $('#'+containerDiv).highcharts().series[j].addPoint({x:timestamp,y:parseInt(record[key]),color:color,marker:{fillColor:color,lineColor:color,states:{hover:{fillColor:color,lineColor:color}}}},true,true);
                                                    }else{
                                                        tooltipKeyword["0"] = [];
                                                        if(label_field == ''){
                                                            tooltipKeyword["0"].push(record[key]);
                                                        }else{
                                                            tooltipKeyword["0"].push(record[label_field]);
                                                        }
                                                        $('#'+containerDiv).highcharts().series[j].addPoint({x:timestamp,y:0,color:color,marker:{fillColor:color,lineColor:color,states:{hover:{fillColor:color,lineColor:color}}}},true,true);
                                                    }
                                                }

                                            }
                                        }
                                    }
                                }
                                i++;
                            }
                            //},3000);
                            //gTimer.timer = timer;
                        }else{
                            clearInterval(timer);
                        }
                    }
                });
                //},3000);
            }
            else{
                clearInterval(timer);
            }
        },2500);
        gTimer.timer = timer;

    },
    filterResults:function(docsData,oldData){
        var newDoc = oldData;
        if(types.length > 0){
            var checkBoxArray = [];
            var radioBoxArray = [];
            var booleanArray = [];
            var rangeArray = [];
            //var newDoc = [];

            $(".radio_filters").each(function(){
                if($(this).attr('checked')){
                    var field = $(this).attr('name');
                    field = field.replace(/!/g,' ');
                    var field_value = $(this).val();
                    radioBoxArray.push({field:field,value:field_value});
                }
            });
            $(".checkbox_filters").each(function(){
                if($(this).attr('checked')){
                    var field = $(this).attr('name');
                    field = field.replace(/!/g,' ');
                    var field_value = $(this).val();
                    checkBoxArray.push({field:field,value:field_value});
                }
            });
            $(".boolean_filters").each(function(){
                if($(this).attr('checked')){
                    var field = $(this).attr('name');
                    field = field.replace(/!/g,' ');
                    var field_value = $(this).val();
                    booleanArray.push({field:field,value:field_value});
                }
            });
            $(".range_filters").each(function(){
                if($(this).attr('checked')){
                    var field = $(this).attr('name');
                    field = field.replace(/!/g,' ');
                    var field_value = $(this).val().split('-');
                    var min  = parseInt(field_value[0]);
                    var max  = parseInt(field_value[1]);
                    var range_label = $(this).attr('title');
                    rangeArray.push({field:field,min:min,max:max,label:range_label});
                }
            });
            if(rangeArray.length>0){
                for(var i=0;i<docsData.length;i++){
                    for(var j=0;j<rangeArray.length;j++){
                        if(docsData[i][rangeArray[j].field] >=rangeArray[j].min && docsData[i][rangeArray[j].field] <= rangeArray[j].max){
                            newDoc.push(docsData[i]);
                            break;
                        }
                    }
                }
            }
            if(booleanArray.length>0){
                for(var i=0;i<docsData.length;i++){
                    for(var j=0;j<booleanArray.length;j++){
                        if(booleanArray[j].value == 'empty'){
                            if(docsData[i][booleanArray[j].field] == 'na' || docsData[i][booleanArray[j].field] == ''){
                                newDoc.push(docsData[i]);
                                break;
                            }
                        }else if(booleanArray[j].value == 'nonempty'){
                            if(docsData[i][booleanArray[j].field] != 'na' && docsData[i][booleanArray[j].field] != ''){
                                newDoc.push(docsData[i]);
                                break;
                            }
                        }

                    }
                }
            }
            if(checkBoxArray.length>0){
                for(var i=0;i<docsData.length;i++){
                    for(var j=0;j<checkBoxArray.length;j++){
                        if(docsData[i][checkBoxArray[j].field] == checkBoxArray[j].value){
                            newDoc.push(docsData[i]);
                            break;
                        }
                    }
                }
            }
            if(radioBoxArray.length>0){
                for(var i=0;i<docsData.length;i++){
                    for(var j=0;j<radioBoxArray.length;j++){
                        if(docsData[i][radioBoxArray[j].field] == radioBoxArray[j].value){
                            newDoc.push(docsData[i]);
                            break;
                        }
                    }
                }
            }
            return newDoc;
        }else{
            for(var k=0;k<docsData.length;k++){
                newDoc.push(docsData[k]);
            }
            return newDoc;
        }
    },
    updateVisualizerConfigs : function(){

        $.ajax({
            url:"/widgets/findAllActiveWidgets",
            success:function(data){
                if(typeof data['doc'] != "undefined"){
                    visualizerConfig = data['doc'];
                }
            }
        });
    },
    startCamel : function (id){
        $.ajax({
            url: "/configs/startUploader/"+id+"/10/1/1",
            success: function(data){
                $('#'+id+"StartStop").html('<a href="javascript:" onclick="utils.stopCamel('+id+')" ><i class="icon-ban-circle"></i> Stop Uploader</a>');
            },error:function(){
                console.log('Camel start service error');
            }
        });
    },
    /**
     *
     * @param id
     * Id of the workflow you want to stop
     */
    stopCamel : function(id){

        $.ajax({
            url: "/configs/stopUploader/"+id+"/10/1/1",
            success: function(){

                $('#'+id+"StartStop").html('<a href="javascript:" onclick="utils.startCamel('+id+')" ><i class="icon-ban-circle"></i> Start Uploader</a>');
            },error:function(){
                console.log('Camel stop service error');
            }
        });
    },

    /**
     *
     * @param type
     * Type of the moudle for which you want unique name.Possible values Tag,Aggregations,Kpi,Algorithm,Notification,Activity,Workflow,datadefinition,datasources,stream
     *
     * @param name
     * custom string to include in name.
     * @returns {string}
     * auto generated name in string.
     */
    getAutoGeneratedNameOf : function(type,name){
        var auto_generated_name="";
        var auto_generator = new Date().getTime();
        switch (type)
        {
            case "Tag":
                auto_generated_name = name + "_" +"Tag_"+auto_generator;
                break;
            case "Aggregation":
                auto_generated_name = name + "_" +"Agg_"+auto_generator;
                break;
            case "Kpi":
                auto_generated_name = name + "_" +"Kpi_"+auto_generator;
                break;
            case "Algorithm":
                auto_generated_name = name + "_" +"Algo_"+auto_generator;
                break;
            case "Notification":
                auto_generated_name = name + "_" +"Alert_"+auto_generator;
                break;
            case "Activity":
                auto_generated_name = name + "_" +"Activity_"+auto_generator;
                break;
            case "Workflow":
                auto_generated_name = name + "_" +"Wf_"+auto_generator;
                break;
            case "dataDefinition":
                auto_generated_name = name + "_" +"data_"+auto_generator;
                break;
            case "dataSource":
                auto_generated_name = name + "_" +"dataSource_"+auto_generator;
                break;
            case "stream":
                auto_generated_name = name + "_" +"Stream_"+auto_generator;
                break;
        }
        auto_generator++;
        return auto_generated_name;
    },

    checkWidgetType: function(dataArray,keyword){
        for(var i=0;i<dataArray.length;i++){
            if(dataArray[i] == keyword){
                return true;
            }
        }
        return false;
    },
    getDataCollectionName: function(data_collection_id){

        var data_collection_name="";
        $.ajax({
            url: Constants.URL_PREFIX+"/collections?id="+data_collection_id,
            /*async:false,*/
            type: 'GET',
            success: function(data){
                if(typeof data['doc'] != "undefined"){
                    data_collection_name =   data['doc'][0].name;
                }
            }
        });

        return data_collection_name;

    },
    getDataStreamName: function(datastream_id){

        var datastream_name="";
        $.ajax({
            url: Constants.URL_PREFIX+"datadefinitions?id="+datastream_id,
            type: 'GET',
            /*async:false,*/
            success: function(data){
                if(typeof data['doc'] != "undefined"){
                    datastream_name =   data['doc'][0].name;

                }
            }
        });

        return datastream_name;

    },
    getDataListName: function(stream_id){
        var stream_name = '';

        $.ajax({
            url: Constants.URL_PREFIX+"/streams?id="+stream_id,
            type: 'GET',
            /*async:false,*/
            success: function(data){

                if(typeof data['doc'] != "undefined"){
                    stream_name =   data['doc'][0].name;
                }
            }
        });

        return stream_name;
    },
    trimWhiteSpaces : function(string){

        return (typeof string !== 'undefined')?string.replace(/ /g,''):'';
    },
    removeSpecialCharactors : function(string){

        return (typeof string !== 'undefined')?string.replace(/[^a-zA-Z 0-9]+/g,''):'';
    },
    filterGraph:function(id){
        var checkboxes = $('input:checkbox.pivots_'+id);
        pivotsToShow = [];
        $.each(checkboxes,function(index,checkbox){
            if($(checkbox).is(':checked'))
            {
                pivotsToShow.push($(checkbox).val());
            }
        });
        this.updateGraph(graphData,pivotsToShow,id);
    },
    getDataAndupdateGraph : function(table,collectionId,dataListId,aggId,startTime,endTime,timezone,aggLevel,e,start,end,fields_to_monitor,container){
        var self = this;
        $.ajax({
            url:Constants.URL_PREFIX+"/visualizer/"+table+"/"+collectionId+"/"+dataListId+"/"+aggId+"/"+startTime+"/"+endTime+"/"+timezone+"/"+aggLevel+"/"+e+"/"+start+"/"+end+"/na",
            success:function(response_data){
                graphData = response_data;
                self.updateGraph(response_data,fields_to_monitor,container);
            }
        });
    },
    getDataBubbleGraph : function(streamType,collection, list, startDate, endDate,algoId, algoCat, level, index,container){
        var self = this;
        d3.json(Constants.URL_PREFIX+"/visualizer/"+streamType+'/'+collection+'/'+list+'/'+startDate+'/'+endDate+'/'+algoId+'/'+algoCat+'/'+level+'/'+index+'/10/na', function(data){
            var dataResult = JSON.parse(data[0].docs);
            self.showBubbleGraph(dataResult,container);
        });
    },
    getDataCirclePackingGraph:function(streamType,collection, list, startDate, endDate,algoId, algoCat, level, index,container){
        var self = this;
        /*d3.json("/visualizer/load/"+streamType+"/"+collection+"/"+list+"/"+"na"+"/"+startDate+"/"+endDate+"/"+algoId+"/"+algoCat+"/"+level+"/"+index+"/10", function(data){
         //var dataResult = JSON.parse(data[0].docs);
         var dataResult = data;
         self.showCircleGraph(dataResult,container);
         });*/
        $.ajax({
            url:Constants.URL_PREFIX+"/visualizer/"+streamType+"/"+collection+"/"+list+"/"+"na"+"/"+startDate+"/"+endDate+"/"+algoId+"/"+algoCat+"/"+level+"/"+index+"/10/na",
            success:function(response_data){
                var dataResult = response_data;
                self.showCircleGraph(dataResult,container);
            }
        });
    },
    algorithmsGraph:function(stream_id,startDate, endDate,algoId, algoCat,container){
        var self = this;
        $.ajax({
            url:Constants.URL_PREFIX+"/visualizer/"+"streamAlgo"+"/"+stream_id+"/"+"na"+"/"+startDate+"/"+endDate+"/"+algoId+"/"+algoCat+"/"+"-1"+"/"+"1"+"/10/na",
            success:function(response_data){
                var dataResult = response_data;
                self.showCircleGraph(dataResult,container);
            }
        });
    },
    map_alerts:function(lat, long, alert_name, date_generated, msg ){

        /*var randIndex = Math.floor(Math.random()*(4-0+1)+0);
         var city = cities[randIndex];

         lat = city.lat;
         lat = city.long;*/

        ms={alert_name:alert_name,  date_generated: date_generated, msg: msg}
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, long),
            map: map
        });
        marker.setMap(null);
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, long),
            icon: 'images/alert.png',
            map: map
        });
        infoBubble = new InfoBubble({
            maxWidth: 1000,
            padding: 0,
            minWidth:300,
            borderRadius: 4,
            shadowStyle: 1,
            arrowSize: 20,
            arrowPosition: 30,
            arrowStyle: 0,
            borderWidth: 2,
            borderColor: '#355D81'
        });



        //{name:"Seattle", lat:47.6097, long: -122.3331, msg:[] }
        if(!this.checkLatlongExists(lat,long)){
            cities.push({name:"", lat:lat, long: long, msg:[] });
        }

        $.each(cities,function(index, value){
            if(value.lat==lat){
                value.msg.push(ms)
                /* var alertmsg='<div id="infowindow-wrapper"><div class="infowindow-heading">'+value.name+'</div>';
                 $.each(value.msg,function(index, msg_value){
                 alertmsg+='<div class="infowindow-box"> ' +
                 '<div class="infowindow-row"> ' +
                 '<div class="infowindow-subheading">Alert Name</div> ' +
                 '<div class="infowindow-text">'+msg_value.alert_name+'</div> ' +
                 '</div> ' +
                 '<div class="infowindow-row"> ' +
                 '<div class="infowindow-subheading">Date Generated</div> ' +
                 '<div class="infowindow-text">'+msg_value.date_generated+'</div> ' +
                 '</div> ' +
                 '<div class="infowindow-row"> ' +
                 '<div class="infowindow-subheading">Message</div> ' +
                 '<div class="infowindow-text">'+msg_value.msg+'</div> ' +
                 '</div>'+
                 '</div>'
                 });
                 alertmsg+='</div>';*/
                /*infoBubble = new google.maps.InfoWindow({
                 content: alertmsg
                 });*/
                //infoBubble.setContent(alertmsg );
                //infoBubble.open(map, marker);
            }
        });
        google.maps.event.addListener(marker, 'click', (function(marker,i) {
            return function() {
                $.each(cities,function(index, value){
                    if(value.lat==lat){
                        var alertmsg='<div id="infowindow-wrapper"><div class="infowindow-heading">'+value.name+'</div>';
                        $.each(value.msg,function(index, msg_value){
                            alertmsg+='<div class="infowindow-box">'+
                                '<div class="infowindow-row"> ' +
                                '<div class="infowindow-subheading">Alert Name</div> ' +
                                '<div class="infowindow-text">'+msg_value.alert_name+'</div> ' +
                                '</div> ' +
                                '<div class="infowindow-row"> ' +
                                '<div class="infowindow-subheading">Date Generated</div> ' +
                                '<div class="infowindow-text">'+msg_value.date_generated+'</div> ' +
                                '</div> ' +
                                '<div class="infowindow-row"> ' +
                                '<div class="infowindow-subheading">Message</div> ' +
                                '<div class="infowindow-text">'+msg_value.msg+'</div> ' +
                                '</div> '+
                                '</div> '

                        });
                        alertmsg+='</div>';


                        infoBubble.setContent(alertmsg );
                        infoBubble.open(map, marker);

                    }
                });

            }
        })(marker, mapi));
    },
    singleMapAlerts:function(lat, long, alert_name, date_generated, msg ){

        //ms={alert_name:alert_name,  date_generated: date_generated, msg: msg}
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, long),
            map: map
        });
        marker.setMap(null);
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, long),
            icon: 'images/alert.png',
            map: map
        });
        var infoBubble = new InfoBubble({
            maxWidth: 1000,
            padding: 0,
            minWidth:300,
            borderRadius: 4,
            shadowStyle: 1,
            arrowSize: 20,
            arrowPosition: 30,
            arrowStyle: 0,
            borderWidth: 2,
            borderColor: '#355D81'
        });
        $.each(cities,function(index, value){
            if(value.lat==lat){
                var alertmsg='<div id="infowindow-wrapper"><div class="infowindow-heading">'+value.name+'</div>';
                alertmsg+='<div class="infowindow-row"> ' +
                    '<div class="infowindow-subheading">Alert Name</div> ' +
                    '<div class="infowindow-text">'+alert_name+'</div> ' +
                    '</div> ' +
                    '<div class="infowindow-row"> ' +
                    '<div class="infowindow-subheading">Date Generated</div> ' +
                    '<div class="infowindow-text">'+date_generated+'</div> ' +
                    '</div> ' +
                    '<div class="infowindow-row"> ' +
                    '<div class="infowindow-subheading">Message</div> ' +
                    '<div class="infowindow-text">'+msg+'</div> ' +
                    '</div>'
                alertmsg+='</div>';
                infoBubble.setContent(alertmsg);
                infoBubble.open(map, marker);
            }
        });
        google.maps.event.addListener(marker, 'click', (function(marker,i) {
            return function() {
                $.each(cities,function(index, value){
                    if(value.lat==lat){
                        var alertmsg='<div id="infowindow-wrapper"><div class="infowindow-heading">'+value.name+'</div>';
                        $.each(value.msg,function(index, msg_value){
                            alertmsg+='<div class="infowindow-row"> ' +
                                '<div class="infowindow-subheading">Alert Name</div> ' +
                                '<div class="infowindow-text">'+msg_value.alert_name+'</div> ' +
                                '</div> ' +
                                '<div class="infowindow-row"> ' +
                                '<div class="infowindow-subheading">Date Generated</div> ' +
                                '<div class="infowindow-text">'+msg_value.date_generated+'</div> ' +
                                '</div> ' +
                                '<div class="infowindow-row"> ' +
                                '<div class="infowindow-subheading">Message</div> ' +
                                '<div class="infowindow-text">'+msg_value.msg+'</div> ' +
                                '</div> '

                        });
                        alertmsg+='</div>';


                        infoBubble.setContent(alertmsg );
                        infoBubble.open(map, marker);

                    }
                });

            }
        })(marker, mapi));

    },
    checkLatlongExists:function(lat,lng){
        for(var i=0;i<cities.length;i++){
            if(cities[i].lat == lat && cities[i].long == lng){
                return true;
            }
        }
        return false;
    },
    showCircleGraph :function(dataResult,container,diameter){
        console.log(dataResult);
        var containerDiv = container;// 'circle_packing_'+container;
        $("#"+containerDiv).html('');
        var timestamp = 0;
        for (key in dataResult) {
            var finalKey = key.replace(/[-\s]/g, ',')
            finalKey = finalKey.replace(/[:\s]/g, ',');
            var tokens = finalKey.split(',');
            var tokeStamp = Date.UTC(parseInt(tokens[0]),parseInt(tokens[1]),parseInt(tokens[2]),parseInt(tokens[3]),parseInt(tokens[4]),parseInt(tokens[5]),parseInt(tokens[6]));
            if(tokeStamp > timestamp){
                timestamp = tokeStamp;
            }
        }
        var jsonData = '{';
        for (key in dataResult) {
            var finalKey = key.replace(/[-\s]/g, ',')
            finalKey = finalKey.replace(/[:\s]/g, ',');
            var tokens = finalKey.split(',');
            var tokeStamp = Date.UTC(parseInt(tokens[0]),parseInt(tokens[1]),parseInt(tokens[2]),parseInt(tokens[3]),parseInt(tokens[4]),parseInt(tokens[5]),parseInt(tokens[6]));
            if(tokeStamp == timestamp){
                var subData = dataResult[key];
                jsonData += '"name": "'+key+'","children": [';
                for(sub in subData){
                    var subData2 = subData[sub];
                    var subDataText = '';
                    for(sub2 in subData2){
                        subDataText += '{"name": "'+sub2+'","children": [';
                        var subData3 = subData2[sub2];
                        var subDataText2 = '';
                        for(sub3 in subData3){
                            var sub3Data = subData3[sub3];
                            var size = sub3Data.size;

                            subDataText2 +='{"name": "'+sub3Data.term+'", "size": '+(Math.round(size*100)/100) +'},';
                        }
                        subDataText += subDataText2.slice(0,-1);
                        subDataText +=']},';
                    }
                }
                jsonData +=  subDataText.slice(0,-1)
                jsonData += ']';
            }
        }
        /*for (key in dataResult) {
         var finalKey = key.replace(/[-\s]/g, ',')
         finalKey = finalKey.replace(/[:\s]/g, ',');
         var tokens = finalKey.split(',');
         var tokeStamp = Date.UTC(parseInt(tokens[0]),parseInt(tokens[1]),parseInt(tokens[2]),parseInt(tokens[3]),parseInt(tokens[4]),parseInt(tokens[5]),parseInt(tokens[6]));
         if(tokeStamp == timestamp){
         var subData = JSON.parse(dataResult[key]);
         jsonData += '"name": "'+key+'","children": [';
         for(sub in subData){
         var subData2 = subData[sub];
         var subDataText = '';
         for(sub2 in subData2){
         subDataText += '{"name": "'+sub2+'","children": [';
         var subData3 = subData2[sub2];
         var subDataText2 = '';
         for(sub3 in subData3){
         var sub3Data = JSON.parse(subData3[sub3]);
         var size = sub3Data.size;

         subDataText2 +='{"name": "'+sub3Data.term+'", "size": '+(Math.round(size*100)/100) +'},';
         }
         subDataText += subDataText2.slice(0,-1);
         subDataText +=']},';
         }
         }
         jsonData +=  subDataText.slice(0,-1)
         jsonData += ']';
         }
         }*/
        jsonData += '}';
        var json = $.parseJSON(jsonData);
        var diameter = diameter,

            format = d3.format(",d"),
            color = d3.scale.category10();

        var pack = d3.layout.pack()
            .size([diameter - 4, diameter - 4])
            .value(function(d) { return d.size; });

        var svg = d3.select("#"+containerDiv).append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .append("g")
            .attr("transform", "translate(2,2)");

        var node = svg.datum(json).selectAll(".node")
            .data(pack.nodes)
            .enter().append("g")
            .attr("class", function(d) { return d.children ? "node" : "leaf node"; })
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

        node.append("title")
            .text(function(d) { return d.name + ':'+d.size; });

        node.append("circle")
            .attr("r", function(d) { return d.r; })
            .style("fill", function(d){ return d.color; });

        node.filter(function(d) { return !d.children; }).append("text")
            .attr("dy", ".3em")
            .style("text-anchor", "middle")
            .text(function(d) { return d.name.substring(0, d.r / 3)});
        $("#"+containerDiv).css("height", 'auto');
        //$("#"+containerDiv).css("margin-left", '10%');

    },
    showBubbleGraph : function(response_data,container){
        //alert('yes now in show graph page.');
        // console.log(response_data);
        var containerDiv = 'bubble_chart_'+container;
        var dataResult = response_data;
        // console.log(response_data);
        var dataResult = response_data;
        var jsonData = '{';
        for (key in dataResult) {
            //alert(key);
            var subData = JSON.parse(dataResult[key]);
            jsonData += '"name": "'+key+'","children": [';
            for(sub in subData){
                var subData2 = subData[sub];
                var subDataText = '';
                for(sub2 in subData2){
                    subDataText += '{"name": "'+sub2+'","children": [';
                    var subData3 = subData2[sub2];
                    var subDataText2 = '';
                    for(sub3 in subData3){
                        var sub3Data = JSON.parse(subData3[sub3]);
                        subDataText2 +='{"name": "'+sub3Data.term+'", "size": '+sub3Data.size+'},';
                    }
                    subDataText += subDataText2.slice(0,-1);
                    subDataText +=']},';
                }
            }
            jsonData +=  subDataText.slice(0,-1)
            jsonData += ']';
        }
        jsonData += '}';
        //alert(jsonData);
        //var dataForGraph = jsonData.slice(0,-1);
        ///jsonData += '}';
        var json = JSON.parse(jsonData);

        var r = '400',
            format = d3.format(",d"),
            fill = d3.scale.category10();
        var bubble = d3.layout.pack()
            .sort(null)
            .size([r, r]);
        var vis = d3.select("#"+containerDiv).append("svg:svg")
            .attr("width", '100%')
            .attr("height", '100%')
            .attr("class", "bubble");
        //d3.json("../resources/data.json", function(json) {
        var node = vis.selectAll("g.node")
            .data(bubble.nodes(this.classes(json))
                .filter(function(d) { return !d.children; }))
            .enter().append("svg:g")
            .attr("class", "node")
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

        node.append("svg:title")
            .text(function(d) { return d.className + ": " + d.value; });

        node.append("svg:circle")
            .attr("r", function(d) { return d.r; })
            .style("fill", function(d) { return fill(d.packageName); });
        node.append("svg:text")
            .attr("text-anchor", "middle")
            .attr("dy", ".3em")
            .text(function(d) { return d.className.substring(0, d.r / 3); });
    },
    classes: function(root){
        var classes = [];
        function recurse(name, node) {
            if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
            else classes.push({packageName: name, className: node.name, value: node.size});
        }
        recurse(null, root);
        return {children: classes};
    },

    updateGraph : function(response_data,pivots,container,aggregationText){
        var containerDiv = container;
        var response_data = $.parseJSON(response_data);
        var docs = $.parseJSON(response_data[0].docs);
        var series = [];
        for(var i = 0; i < pivots.length; i++ ){
            var dataString = '[';
            for (var j=0; j<docs.length; j++){
                var datetime =  new Date(parseInt(docs[j].timestamp));
                var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
                var pivoutValue = Math.round(docs[j][pivots[i]]);
                //alert(pivoutValue);
                dataString+='['+timestamp+','+parseInt(pivoutValue)+']'+',';
            }
            dataString = dataString.slice(0,-1);
            dataString += ']';
            var data = $.parseJSON(dataString);
            series.push({name:pivots[i], data:data});
        }
        var options = {
            credits: {
                enabled: false
            },
            title: {
                text: aggregationText
            },
            chart: {
                renderTo: containerDiv,
                zoomType: 'x'
            },
            xAxis: {
                type: 'datetime'
            },
            series: series
        };
        var chart = new Highcharts.Chart(options);
        /*
         var chart = new google.visualization.AnnotatedTimeLine(document.getElementById(containerDiv));

         var data = new google.visualization.DataTable();
         data.addColumn('datetime', 'Date');
         var positions = [];

         $.each(fields_to_monitor,function(index,field){
         data.addColumn('number',field);
         positions[field] = index;
         });

         var rows = [];

         $.each(docs,function(index,record){
         var row = [];
         var timestamp = new Date(parseInt(record.timestamp));
         row[0] = timestamp;
         for(var key in record){
         $.each(fields_to_monitor, function(index,field){

         if(key.toLowerCase() == field.toLowerCase()){
         row[positions[field]+1] = parseInt(record[key]);
         }
         } );

         }
         rows.push(row);
         });

         data.addRows(rows);
         chart = new google.visualization.AnnotatedTimeLine(document.getElementById(containerDiv));
         chart.draw(data, {displayAnnotations: true, allowRedraw:true,annotatedtimeline:'#CCCCCC'});*/
    },
    gaugeUpdater: function (gaugeConfig,container,initialize){
        var gaugeContainer = 'gauge_div_'+container;
        $('#'+gaugeContainer).html('');
        if(initialize)
            utils.intializeGauges(gaugeContainer,gaugeConfig);

        $.each(gaugeConfig,function(index,kpiObject){

            utils.updateGauge(kpiObject.dsid,kpiObject.dlid,'na','na','0','10', kpiObject.pivot, kpiObject.pivotValue,kpiObject.fieldToMonitor,kpiObject.container);
        });

    },
    kpiGauges: function (stream_id,kpisData,container,start,end,initialize){
        var gaugeContainer = container;
        $('#'+gaugeContainer).html('');
        utils.updatekpiGauge(gaugeContainer,stream_id,kpisData,'na','na');

    },
    /*intializeGauges : function(mainContainer,kpis){
     for(var i=0;i<kpis.length;i++){
     utils.intializeKpiGauge(mainContainer,kpis[i].name,'kpi_'+kpis[i].id,'',0,"%");
     }
     },*/
    updatekpiGauge: function(gaugeContainer,stream_id,kpisData,startDate,endDate){
        kpiZoomData = [];


        for(var i=0;i<kpisData.length;i++){


            (function(i)
            {
                var kpiName = kpisData[i].name;
                var kpiId = kpisData[i].id;
                var kpiContainer = 'kpi_'+kpiId;
                console.log("343");
                $.ajax({
                    url:'/configs/loadKpiGauges/'+stream_id+"/"+kpiId+'/'+startDate+'/'+endDate,
                    /* async:false,*/
                    success:function(data){


                        var gaugeData = JSON.parse(JSON.parse(data)[0].docs);
                        if (gaugeData != 'An error occurred'){
                            var kpiValue = parseFloat(gaugeData[0].KpiValue);
                            var max = 0;

                            if(kpiValue==100 || kpiValue < 100){
                                max = 100;
                            }else if(kpiValue >100 && kpiValue < 200){
                                max = 200;
                            }else if(kpiValue > 200 && kpiValue < 1000){
                                max = 1000;
                            }else if(kpiValue>1000 && kpiValue < 2000){
                                max = 2000;
                            }
                            else if(kpiValue > 2000 && kpiValue < 10000){
                                max = 10000;
                            }
                            else if(kpiValue > 10000){
                                max = 500000;
                            }
                            kpiZoomData.push({kpiName:kpiName,kpiId:kpiId,kpiValue:kpiValue});
                            utils.intializeKpiGauge(gaugeContainer,kpiName,kpiContainer,kpiValue,max,false);
                        }

                    }
                });
            })(i);



        }
    },
    intializeKpiGauge : function(mainContainer,titleText,renderTo,initialValue,maxValue,zoomStatus){
        if(zoomStatus){
            $('#'+mainContainer).append('<div id="'+renderTo+'" style="float:left; display:inline-block;width: 275px; height: 250px;"></div>');
        }else{
            $('#'+mainContainer).append('<div id="'+renderTo+'" style="float:left; display:inline-block;width:48%;height: 220px;"></div>');
        }


        utils.overlayLoader("gauge_container_wrap", "hide", "no");
        /*
         var colors = ['#55BF3B','#55BF3B','#55BF3B','#DDDF0D','#DF5353'];
         var plotBounds = [];
         var plotFrom = 0;
         var difference = maxValue/5;
         for(var i=0;i<5;i++){
         var to = plotFrom + difference;
         plotBounds.push({from:plotFrom,to:to,color:colors[i]});
         plotFrom = to;
         }*/

        /*{
         from: 0,
         to: 500000,
         color: '#55BF3B' // green
         }*/



        var plotBounds = this.kpiPlotBound(titleText,maxValue,5);

        $('#'+renderTo).highcharts({
                credits: {
                    enabled: false
                },
                chart: {
                    backgroundColor:null,
                    type: 'gauge',
                    plotBackgroundColor: null,
                    plotBackgroundImage: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    marginTop: 50
                },

                title: {
                    text: titleText,
                    verticalAlign: "top",
                    style:{
                        color: '#45484D',
                        fontSize: '13px'
                    }
                },
                tooltip: {
                    useHTML: true
                },
                pane: {
                    startAngle: -150,
                    endAngle: 150,
                    background: [{
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#FFF'],
                                [1, '#333']
                            ]
                        },
                        borderWidth: 0,
                        outerRadius: '109%'
                    }, {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                            stops: [
                                [0, '#333'],
                                [1, '#FFF']
                            ]
                        },
                        borderWidth: 1,
                        outerRadius: '107%'
                    }, {
                        // default background
                    }, {
                        backgroundColor: '#DDD',
                        borderWidth: 0,
                        outerRadius: '105%',
                        innerRadius: '103%'
                    }]
                },

                // the value axis
                yAxis: {
                    min: 0,
                    max: maxValue,

                    minorTickInterval: 'auto',
                    minorTickWidth: 1,
                    minorTickLength: 10,
                    minorTickPosition: 'inside',
                    minorTickColor: '#666',

                    tickPixelInterval: 30,
                    tickWidth: 2,
                    tickPosition: 'inside',
                    tickLength: 10,
                    tickColor: '#666',
                    labels: {
                        step: 2,
                        rotation: 'auto'
                    },
                    plotBands: plotBounds/*[{
                     from: 0,
                     to: 500000,
                     color: '#55BF3B' // green
                     }]*/
                },

                series: [
                    {
                        name: titleText,
                        data: [initialValue],
                        tooltip: {
                            valueSuffix: ' '
                        }
                    }
                ]
            }
            // Add some life
        );
    },
    kpiPlotBound:function(kpiName,kpiValue,portion){
        var plotBounds = [];
        var plotFrom = 0;
        var difference = kpiValue/portion;
        if(kpiName == 'Total Sale'){
            var colors = ['#DF5353','#DDDF0D','#55BF3B','#55BF3B','#55BF3B'];
            for(var i=0;i<5;i++){
                var to = plotFrom + difference;
                plotBounds.push({from:plotFrom,to:to,color:colors[i]});
                plotFrom = to;
            }
        }else{
            var colors = ['#55BF3B','#55BF3B','#55BF3B','#DDDF0D','#DF5353'];
            for(var i=0;i<5;i++){
                var to = plotFrom + difference;
                plotBounds.push({from:plotFrom,to:to,color:colors[i]});
                plotFrom = to;
            }
        }
        return plotBounds;
    },
    /*updateGauge: function(dcid,dlid,start_date,end_date,start,end,pivot,pivotValue,fieldToMonitor,container){
     //        console.log("Pivot : " + pivot + ", Value : " + pivotValue + ", FieldToMonitor : " + fieldToMonitor);
     $.ajax({
     url:'/configs/loadAggregatedData/'+dcid+'/'+dlid+'/'+start_date+'/'+end_date+'/'+start+'/'+end,
     success: function(data){
     var aggregatedData = JSON.parse(JSON.parse(data)[0].docs);
     var lastRecordsTimestamp = aggregatedData[aggregatedData.length-1].timestamp;
     for(var i=aggregatedData.length-1; i>=0; i--){
     if(aggregatedData[i].timestamp == lastRecordsTimestamp){
     var obj = aggregatedData[i];
     var keys = Object.keys(obj);
     $.each(keys,function(index,key){
     if(pivot != ""){
     if(key.toLowerCase() == pivot.toLowerCase() && obj[key] == pivotValue){
     if(typeof obj[fieldToMonitor.toLowerCase()] !== 'undefined'){
     $('#'+container).highcharts().series[0].points[0].update(parseInt(obj[fieldToMonitor.toLowerCase()]));
     }
     else if(typeof obj[fieldToMonitor] !== 'undefined' ){
     $('#'+container).highcharts().series[0].points[0].update(parseInt(obj[fieldToMonitor]));
     }
     }
     }
     else{
     if(key.toLowerCase() == fieldToMonitor.toLowerCase()){
     $('#'+container).highcharts().series[0].points[0].update(parseInt(obj[key]));
     }
     }
     });
     }
     }
     }
     });
     },
     intializeGauge : function(mainContainer,titleText,renderTo,seriesText,initialValue,unit){

     $('#'+mainContainer).append('<div id="'+renderTo+'" style="float:left;width: 275px; height: 225px;"></div>');

     $('#'+renderTo).highcharts({
     credits: {
     enabled: false
     },
     chart: {
     backgroundColor:null,
     type: 'gauge',
     plotBackgroundColor: null,
     plotBackgroundImage: null,
     plotBorderWidth: 0,
     plotShadow: false,
     width:0
     },

     title: {
     text: titleText,
     style:{
     color: '#45484D'
     }
     },

     pane: {
     startAngle: -150,
     endAngle: 150,
     background: [{
     backgroundColor: {
     linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
     stops: [
     [0, '#FFF'],
     [1, '#333']
     ]
     },
     borderWidth: 0,
     outerRadius: '109%'
     }, {
     backgroundColor: {
     linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
     stops: [
     [0, '#333'],
     [1, '#FFF']
     ]
     },
     borderWidth: 1,
     outerRadius: '107%'
     }, {
     // default background
     }, {
     backgroundColor: '#DDD',
     borderWidth: 0,
     outerRadius: '105%',
     innerRadius: '103%'
     }]
     },

     // the value axis
     yAxis: {
     min: 0,
     max: 200,

     minorTickInterval: 'auto',
     minorTickWidth: 1,
     minorTickLength: 10,
     minorTickPosition: 'inside',
     minorTickColor: '#666',

     tickPixelInterval: 30,
     tickWidth: 2,
     tickPosition: 'inside',
     tickLength: 10,
     tickColor: '#666',
     labels: {
     step: 2,
     rotation: 'auto'
     },
     title: {
     text: unit
     },
     plotBands: [{
     from: 0,
     to: 120,
     color: '#55BF3B' // green
     }, {
     from: 120,
     to: 160,
     color: '#DDDF0D' // yellow
     }, {
     from: 160,
     to: 200,
     color: '#DF5353' // red
     }]
     },

     series: [
     {
     name: seriesText,
     data: [initialValue],
     tooltip: {
     valueSuffix: ' '+unit
     }
     }
     ]
     }
     // Add some life
     );


     },
     updateGaugeWithoutPivot:function(dsid,dlid,start_date,end_date,start,end,fieldsToMonitor){
     $.ajax({

     url:'/configs/loadAggregatedData/'+dsid+'/'+dlid+'/'+start_date+'/'+end_date+'/'+start+'/'+end,
     success: function(data){

     var aggregatedData = JSON.parse(JSON.parse(data)[0].docs);

     var gauges = [['Label', 'Value']];

     $.each(aggregatedData,function(index,obj){
     var keys = Object.keys(obj);
     //                    console.log('KEYS : ' + keys);
     //                    $.each(keys,function(index,key){

     $.each(fieldsToMonitor,function(index,fieldToMonitor){
     if(typeof obj[fieldToMonitor.toLowerCase()] !== 'undefined')
     gauges.push([fieldToMonitor,parseInt(obj[fieldToMonitor.toLowerCase()])]);
     else if(typeof obj[fieldToMonitor] !== 'undefined' )
     gauges.push([fieldToMonitor,parseInt(obj[fieldToMonitor])]);
     });
     //                    });
     });

     //               google.load('visualization', '1', {packages: ['gauge']});
     var gauge_data = google.visualization.arrayToDataTable(gauges);

     var options = {
     width: 525, height: 160,
     redFrom: 90, redTo: 100,
     yellowFrom:75, yellowTo: 90,
     minorTicks: 5
     };

     //                g = new google.visualization.Gauge(document.getElementById('chart_div'));
     //                gauge = new google.visualization.Gauge(document.getElementById('gauge_div'));
     var gauge = new google.visualization.Gauge(document.getElementById('gauge_div'));
     gauge.draw(gauge_data, options);

     }
     });
     },*/
    loadTemplate: function(templates, callback) {
        var deferreds = [];
        $.each(templates,function(i,t){

            $.each(t, function(directory, temp) {
                $.each(temp, function(index, view) {
                    if (window[view]) {
                        deferreds.push($.get('tpl/' + directory + '/' + view + '.html', function(data) {
                            window[view].prototype.template = _.template(data);
                        }));
                    } else {
                        alert('tpl/' + directory + '/' + view + '.html' + " not found");
                    }
                });
            });
        });

        $.when.apply(null, deferreds).done(callback);
    },
    resetForm : function(formId,dropdownIds){
        //$('#'+formId).each (function(){this.reset(); });
        var firstRadioButton= true;
        $("#"+formId).find(':input').each(function() {
            switch(this.type) {
                case 'password':
                case 'text':
                case 'textarea':
                case 'file':
                case 'select-one':
                case 'select-multiple':
                    $(this).val('');
                    break;
                case 'checkbox':
                    this.checked = false;
                    break;
                case 'radio':
                    if(firstRadioButton){
                        this.checked=true;
                        firstRadioButton=false;
                    }
                    else
                        this.checked = false;

            }
        });
        if(typeof dropdownIds == 'undefined' || dropdownIds.length==0){
            $("#"+formId+' select').multiselect();
            $("#"+formId+' select').multiselect("uncheckAll");
        }
        else{
            for(var i=0;i<dropdownIds.length;i++){
                $('#'+dropdownIds[i]).multiselect();
                $('#'+dropdownIds[i]).multiselect("uncheckAll");
            }
        }
    },
    dynaTreeOfSelectedFields : function(data_list_id,elemId){

        $.ajax({
            url:Constants.URL_PREFIX+'/streams?id='+data_list_id,
            type: 'GET',
            /*async:false,*/
            success:function(data){
                if(typeof data['doc']!=='undefined'){
                    var data_list = data['doc'][0];
                    if(data_list.stream_type.toLowerCase() == 'csv')
                    {
                        var treeOfSelectedFields = "<ul><li class='folder expanded'>"+data_list.name+'<ul>';
                        $.each(data_list.structure,function(index,field){
                            treeOfSelectedFields += '<li class="folder">'+field.name;
                        });
                        treeOfSelectedFields += '</ul></ul>';
                        $('#'+elemId).html(treeOfSelectedFields);
                        $('#'+elemId).dynatree();
                    }
                    else if(data_list.stream_type.toLowerCase() == 'xml'){

                        var treeOfSelectedFields =
                            $.each(data_list.structure,function(index,field){
                                if(index == 0){
                                    treeOfSelectedFields = "<ul><li class='folder expanded'>"+data_list.name+'<ul>';
                                }
                                treeOfSelectedFields += '<li class="folder">'+field.name;
                            });
                        treeOfSelectedFields += '</ul></ul>';
                        $('#'+elemId).html(treeOfSelectedFields);
                        $('#'+elemId).dynatree();

                    }
                }
            }
        });
    },
    // pass category to load jobs or pass '*' to load all jobs
    // pass select element id in which you want to load options
    loadJobs: function(category,elemId){


        $('#'+elemId).empty();
        $('#'+elemId).append('<option value="0">Select Job</option>');
        if(typeof category != 'undefined'){

            var url;

            if(category == '*')
                url = Constants.URL_PREFIX+'/jobs';
            else
                url = Constants.URL_PREFIX+'/jobs?type='+category;

            $.ajax({
                url : url,
                type: 'GET',
                success: function(data){
                    if(typeof data['doc']!= 'undefined'){
                        $.each(data['doc'],function(index,job){
                            $('#'+elemId).append('<option value="'+job._id+'">'+job.name+'</option>');
                        });
                    }
                }
            });
        }
    },

    loadDataDefinition : function(data_definition_id){

        $.ajax({
            url:Constants.URL_PREFIX+'/streams?id='+data_definition_id,
            /*async:false,*/
            type: 'GET',
            success:function(data){

                if(typeof data['doc']!=='undefined'){
                    data_definition = data['doc'][0];
                }
            }
        });
    }
    ,
    loadJobCategories : function(elemId){

        $('#'+elemId).empty();
        $('#'+elemId).append('<option value="0">Select Job Category</option>');

        $.ajax({
            url:Constants.URL_PREFIX+'/jobtypes',
            type: 'GET',
            success: function(data){
                if(typeof data['doc']!= 'undefined'){
                    $.each(data['doc'],function(index,jobCategory){
                        $('#'+elemId).append('<option value="'+jobCategory.name+'">'+jobCategory.name+'</option>');
                    });
                }
            }
        });
    },
    operationalPermissions:function(moduleID){

        var permissions = JSON.parse(localStorage.getItem("permissions"));
        var permissionArray = new Array();
        for(var i=0;i<permissions.length;i++){
            if(permissions[i].module_id == moduleID){
                var permissionData = JSON.parse(permissions[i].operations);
                for(var j=0;j<permissionData.length;j++){
                    permissionArray.push(permissionData[j].name);
                }
            }
        }

        var results = new Array();
        for (var i = 0; i < permissionArray.length; i++) {

            results[this.getOperationPosition(permissionArray[i])] = permissionArray[i];
        }
        return results;
    },
    getOperationPosition : function(operation)
    {

        var operationsOrder = [
            {operation:'edit',position:0}
            ,{operation:'create data list',position:1}
            ,{operation:'show data list',position:2}
            ,{operation:'detail',position:3}
            ,{operation:'start',position:4}
            ,{operation:'stop',position:5}
            ,{operation:'visualize',position:6}
            ,{operation:'delete',position:7}
        ];
        var position
        $.each(operationsOrder,function(index,obj){
            if(obj.operation == operation)
            {
                position = obj.position;
            }
        });
        return position;

    },
    modulePermission:function(moduleID){

        var permissions = JSON.parse(localStorage.getItem("permissions"));
        var permissionArray = new Array();
        for(var i=0;i<permissions.length;i++){
            if(permissions[i].module_id == moduleID){
                return true;
            }
        }
        return false;
    },
    getPath: function (name){
        if(name == 'data collection'){
            return '/#/collections';
        }
        else if(name == 'data definitions'){
            return '/#/datastreams';
        }
        else if(name == 'streams'){
            return '/#/datalists';
        }
        else if(name == 'activities'){
            return '/#/jobs';
        }
        else if(name == 'kpis'){
            return '/#/kpis';
        }
        else if(name == 'workflows'){
            return '/#/workflows';
        }
        else if(name == 'visualizer'){
            return '/#/visualizer';
        }
        else if(name == 'tags'){
            return '/#/tags';
        }
        else if(name == 'notifications'){
            return '/#/alerts';
        }
        else if(name == 'algorithms'){
            return '/#/algorithms';
        }
        else if(name == 'roles'){
            return '/#/roles';
        }
        else if(name == 'users'){
            return '/#/users';
        }
        else if(name == 'forms'){
            return '/#/forms';
        }
        else if(name == 'jobtypes'){
            return '/#/jobtypes';
        }
        else if(name == 'jobcatagory'){
            return '/#/jobcatagory';
        }
        else if(name == 'taggroups'){
            return '/#/taggroups';
        }
        else if(name == 'tagselections'){
            return '/#/tagselections';
        }
        else if(name == 'aggregation'){
            return '/#/aggregation';
        }
        else if(name == 'data sources'){
            return '/#/datasources';
        }
        else if(name == 'widgets'){
            return '/#/widgets';
        }
        else if(name == 'filters'){
            return '/#/filters';
        }
    },
    getIcon: function (name){
        if(name == 'data collection'){
            return 'icon-tasks';
        }
        else if(name == 'data definitions'){
            return 'icon-th-list';
        }
        else if(name == 'dashboard'){
            return 'icon-home';
        }
        else if(name == 'streams'){
            return 'icon-list';
        }
        else if(name == 'activities'){
            return 'icon-calendar';
        }
        else if(name == 'kpis'){
            return 'icon-time';
        }
        else if(name == 'workflows'){
            return ' icon-sitemap';
        }
        else if(name == 'visualizer'){
            return 'icon-eye-open';
        }
        else if(name == 'tags'){
            return ' icon-pushpin';
        }
        else if(name == 'notifications'){
            return ' icon-flag';
        }
        else if(name == 'algorithms'){
            return ' icon-qrcode';
        }

        else if(name == 'users'){
            return 'icon-user';
        }
        else if(name == 'forms'){
            return 'icon-list-alt';
        }

        else if(name == 'aggregation'){
            return ' icon-globe';
        }
        else if(name == 'data sources'){
            return 'icon-gift';
        }
        else if(name == 'widgets'){
            return 'icon-picture';
        }
        else if(name == 'filters'){
            return 'icon-filter';
        }
    },
    getRouter: function (name,path){
        if(name == 'data definitions'){
            //return 'datastreamRouter';
            datastreamRouter.navigate(path,true); return;
        }
        else if(name == 'streams'){
            //return 'dataListRouter';
            dataListRouter.navigate(path,true);   return;
        }
        else if(name == 'activities'){
            return 'jobRouter' ;
        }
        else if(name == 'kpis'){
            return 'KpiRouter' ;
        }
        else if(name == 'workflows'){
            return 'workflowRouter' ;
        }
        else if(name == 'visualizer'){
            return 'visualizerRouter';
        }
        else if(name == 'tags'){
            return 'tagRouter';
        }
        else if(name == 'notifications'){
            return 'alertRouter';
        }
        else if(name == 'algorithms'){
            return 'algorithmRouter';
        }
        else if(name == 'roles'){
            return 'roleRouter';
        }
        else if(name == 'users'){
            return 'userRouter';
        }
        else if(name == 'forms'){
            return 'formRouter';
        }
        else if(name == 'jobtypes'){
            return 'jobTypetRouter';
        }
        else if(name == 'jobcatagory'){
            return 'jobCatRouter';
        }
        else if(name == 'taggroups'){
            return 'tagGrouptRouter';
        }
        else if(name == 'tagselections'){
            return 'tagselectionRouter';
        }
        else if(name == 'aggregation'){
            return 'aggregationRouter';
        }
        else if(name == 'widgets'){
            return 'widgetRouter';
        }

    },
    moduleSortingOrder: function (module) {
        var defaultModules = [

            {name:'data collection',position:0},
            {name:'data definitions',position:1},
            {name:'data sources',position:2},
            {name:'streams',position:3},
            {name:'activities',position:4},
            {name:'workflows',position:5},

            {name:'tags',position:6},
            {name:'kpis',position:7},
            {name:'notifications',position:8},
            {name:'aggregation',position:9},
            {name:'visualizer',position:10},

            {name:'algorithms',position:11},
            {name:'forms',position:12},
            {name:'users',position:13},
            {name:'roles',position:14},
            {name:'widgets',position:15},

            {name:'filters',position:16}

        ];
        var position;
        $.each(defaultModules,function(index,obj){
            if(obj.name == module)
            {
                position = obj.position;
            }
        });
        return position;
    },
    moduleSortingGroup: function (module) {
        var defaultModules = [
            {name:'data collection',position:0,group:1},
            {name:'data definitions',position:1,group:1},
            {name:'data sources',position:2,group:1},
            {name:'streams',position:3,group:1},
            {name:'activities',position:4,group:1},
            {name:'workflows',position:5,group:1},
            {name:'tags',position:6,group:2},
            {name:'kpis',position:7,group:2},
            {name:'notifications',position:8,group:2},
            {name:'aggregation',position:9,group:2},
            {name:'algorithms',position:10,group:3},
            {name:'forms',position:11,group:3},
            {name:'visualizer',position:12,group:4},
            {name:'users',position:13},
            {name:'roles',position:14},
            {name:'widgets',position:15,group:1},
            {name:'filters',position:16,group:3}
        ];
        var position;
        $.each(defaultModules,function(index,obj){
            if(obj.name == module)
            {
                position = obj.group;
            }
        });
        return position;
    },
    dataDefinitionContextLinks:function(){
        var response = new Array();
        var contextLinks = '<div id="contents-nav"><ul class="nav">';
        var rightMenu = '<div style="margin-top: 20px;"><span><a href="#/datalists"> Back to lists option</a></span><ul class="nav nav-stacked nav-pills" style="margin-top: 35px;">';
        if(this.modulePermission('50ab81444410a109b8ecfb08')){
            contextLinks += '<li class=""><a href="/#/kpis">Kpis</a></li>';
            rightMenu += '<li class=""><a href="/#/kpis">Kpis</a></li>';
        }
        if(this.modulePermission('50b76f9a61ca5d39cf28fc6d')){
            contextLinks += '<li class=""><a href="/#/tags">Tags</a></li>';
            rightMenu += '<li class=""><a href="/#/tags">Tags</a></li>';
        }
        if(this.modulePermission('50d82b7c4410a10ed0795eb8')){
            contextLinks += '<li class=""><a href="/#/jobs">Aggregations</a></li>';
            rightMenu += '<li class=""><a href="/#/jobs">Aggregations</a></li>';
        }
        if(this.modulePermission('50ab812d4410a109b8ecfb06')){
            contextLinks += '<li class=""><a href="/#/jobs">Jobs</a></li>';
            rightMenu += '<li class=""><a href="/#/jobs">Jobs</a></li>';
        }
        rightMenu += '</div>';
        contextLinks += '</div>';
        response["right"] = rightMenu;
        response["context"] = contextLinks;
        return response;
    },
    displayValidationErrors: function (messages) {
        for (var key in messages) {
            if (messages.hasOwnProperty(key)) {
                //this.addValidationError(key, messages[key]);
                this.addValidationError(key, "");
            }
        }
        //this.showAlert('Warning!', 'Fix validation errors and try again', 'alert-warning');
        utils.displayAlert("Please fill all required fields.","error");
    },

    addValidationError: function (field, message) {
        //var controlGroup = $('#' + field).parent().parent();
        var controlGroup = $('#' + field).parent();
        controlGroup.addClass('error');
        $('.help-inline', controlGroup).html(message);
    },

    removeValidationError: function (field) {
        //var controlGroup = $('#' + field).parent().parent();
        var controlGroup = $('#' + field).parent();
        controlGroup.removeClass('error');
        $('.help-inline', controlGroup).html('');
    },
    showAlert: function(title, text, klass) {
        $('.alert').removeClass("alert-error alert-warning alert-success alert-info");
        $('.alert').addClass(klass);
        $('.alert').html('<strong>' + title + '</strong> ' + text);
        $('.alert').show();
    },

    hideAlert: function() {
        $('.alert').hide();
    },
    displayAlert: function(msg,status){

        if(typeof status == "boolean"){
            status = (status)?'success':'error';
        }
        var rootPath = window.location.host;
        var statusClass = '';
        if(status == "success")
        {
            $('#messageBox').html('<div class="alert alert-success"><button class="close" data-dismiss="alert" type="button">×</button><div class="alert-logo"><img src="http://'+rootPath+'/images/cloud-logo-small.png" /></div><div class="alert-message"><strong>'+status+' !</strong>'+msg+'</div></div>');
            jQuery('#messageBox .alert').stop().animate({bottom:0, opacity: 1}, 1000),
                setTimeout(function(){jQuery('#messageBox .alert').fadeOut();},8000);
        }
        else if(status == "error"){
            $('#messageBox').html('<div class="alert alert-error"><button class="close" data-dismiss="alert" type="button">×</button><div class="alert-logo"><img src="http://'+rootPath+'/images/cloud-logo-small.png" /></div><div class="alert-message"><strong>'+status+' !</strong>'+msg+'</div></div>');
            jQuery('#messageBox .alert').stop().animate({bottom:0, opacity: 1}, 1000),
                setTimeout(function(){jQuery('#messageBox .alert').fadeOut();},8000);
        }
        else if(status == "info"){
            $('#messageBox').html('<div class="alert alert-info"><button class="close" data-dismiss="alert" type="button">×</button><div class="alert-logo"><img src="http://'+rootPath+'/images/cloud-logo-small.png" /></div><div class="alert-message"><strong>'+status+' !</strong>'+msg+'</div></div>');
            jQuery('#messageBox .alert').stop().animate({bottom:0, opacity: 1}, 1000),
                setTimeout(function(){jQuery('#messageBox .alert').fadeOut();},8000);
        }


    },
    loadDataList: function(src, dest) {
        //selected = (selected) ? selected : "";
        dsName = $("#"+src+" option:selected").val();
        //alert(dsName);

        //$("#datalist").html('');

        var streamList
        $.ajax({
            url: Constants.URL_PREFIX+"/streams/?structure_id="+dsName,
            type: 'GET',
            /*async: false,*/
            success: function(data){
                streamList = data['doc'];
                streamData = '<option value="">Select Datalist</option>';

                if(streamList) {
                    for (var i = 0; i < streamList.length; i++) {
                        streamData +='<option value="'+streamList[i]._id+'">'+streamList[i].name+'</option> ';
                    }
                }

                $('#'+dest).html(streamData);
                //alert(tmpdl);
                //$('#data_list').val(tmpdl);
            }
        });
        return streamList;
    },
    enableDisable: function(what, which) {
        var classes = ["min", "max", "avg"];

        for(var i=0; i<classes.length; i++) {
            if(what == classes[i]) {
                $("."+what+"_"+which).removeAttr("disabled");
            } else {
                $("."+classes[i]+"_"+which).attr("disabled", "disabled");
            }
        }
    },
    getAlgoCategories: function(dropdownId){
        $.ajax({
            url:Constants.URL_PREFIX+'/algorithm/categories',
            type:'GET',
            success:function(data){
                $('#'+dropdownId).html('');
                $('<option value="0">Select algorithm category</option>').appendTo('#'+dropdownId);
                if(typeof data['doc'] !='undefined'){
                    $.each(data['doc'],function(index,algoCategory){
                        $('<option value="'+algoCategory.name+'">'+utils.firstToUpperCase(algoCategory.name)+'</option>').appendTo('#'+dropdownId);
                    });
                }
                $('#'+dropdownId).multiselect("refresh").multiselectfilter();
            }
        });
    },
    firstToUpperCase:function( str ) {
        return str.substr(0, 1).toUpperCase() + str.substr(1);
    },
    uuid : function () {
        var uuid = "", i, random;
        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;

            if (i == 8 || i == 12 || i == 16 || i == 20) {
                uuid += "-"
            }
            uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
        }
        return uuid;
    },
    isAuthenticated: function(){
        var authenticated;
        $.ajax({
            url: Constants.URL_PREFIX+'/users/isAuthenticated',
            /*async:false,*/
            success:function(data){
                authenticated = data.authencticated;
            }
        });
        return authenticated;
    },
    checkDataStreamExists:function(data,dst){
        if(data.length >0 ){
            for(var i=0;i<data.length;i++){
                if(data[i] == dst){
                    return true;
                }
            }
        }
        return false;
    },

    getFilterData: function(){
        filterContainers = [];
        $.each($(".filter-row"),function(index,el){
            var filterContainer = {};
            var id = el.id;

            filterContainer.label = $('#'+id+'label').text();
            filterContainer.type = $('#'+id+'type').val();
            filterContainers.push(filterContainer);
        })
    },
    getFilterFields: function(){
        filterFields = [];

        $.each($(".filter-field"), function(index,el){
            filterField = {};
            id = el.id;

            filterField.type = $("#"+id+"-type").val();
            filterField.label = $("#"+id+"-label").val();
            filterField.fieldset = $("#"+id+"-fieldset").val();
            filterField.radioGroup = $("#"+id+"-radioGroup").val();
            filterField.isChecked = ($("#"+id+"-isChecked").is(':checked'))?1:0;
            filterFields.push(filterField);
        });
    },
    getDashBoardFilterData: function(){
        filterContainers = [];

        var status = true;
        var rows =  $(".filter-row");

        for(var i=0; i < rows.length; i++ )  {
            var el = rows[i];
            var filterContainer = {};
            var id = el.id;
            filterContainer.name = $('#'+id+'name').text();
            filterContainer.label = $('#'+id+'label').val();
            filterContainer.type = $('#'+id+'type').val();
            if (filterContainer.label == ""){
                utils.displayAlert("Label Can not be empty.","error");
                status = false;
                break;

            } else if(filterContainer.type == ""){
                utils.displayAlert("Please select type.","error");
                status = false;
                break;

            } else {
                filterContainers.push(filterContainer);

            }

        }

        /*$.each($(".filter-row"),function(index,el){
         var filterContainer = {};
         var id = el.id;

         filterContainer.label = $('#'+id+'label').val();
         filterContainer.type = $('#'+id+'type').val();
         if (filterContainer.label == ""){
         utils.displayAlert("Label Can not be empty.","error");
         break;

         } else if(filterContainer.type == ""){
         utils.displayAlert("Please select type.","error");

         } else {
         filterContainers.push(filterContainer);

         }

         });*/
        return status;

    },
    checkDataCollectionExists:function(data,collectionId){
        if(data.length >0 ){
            for(var i=0;i<data.length;i++){
                if(data[i] == collectionId){
                    return true;
                }
            }
        }
        return false;

    },
    checkArrayIndex: function (array, key){
        for(var i=0;i<array.length;i++){
            if(array[i].key == key){
                return true;
            }
        }
        return false;
    },
    checkArrayPieIndex: function (array, key){
        for(var i=0;i<array.length;i++){
            if(array[i].keyword == key){
                return true;
            }
        }
        return false;
    },
    graph: function (url,elToShow,xAxis,yAxis){
        utils.displayGraph(elToShow,yAxis,xAxis,url);
    },
    mapTextToNumeric: function (original,data,time){
        var mapped =[];
        for(var v=0;v<data.length;v++)
            mapped.push([time[v],original.indexOf(data[v])]);
        return mapped;
    },
    findUnique: function (arr){
        var unique = [];
        for(var j=0;j<arr.length;j++){
            var t1 = unique.indexOf(arr[j]);
            var t2 = unique.lastIndexOf(arr[j]);
            if((t1==-1) && (t2==-1))
                unique.push(arr[j]);
        }
        var tmp = [];
        tmp.push('');
        for(var j=0;j<unique.length;j++){
            tmp.push(unique[j]);
        }
        return tmp;
    },
    checkArrayIndex: function (array, key){
        for(var i=0;i<array.length;i++){
            if(array[i].key == key){
                return true;
            }
        }
        return false;
    },
    checkArrayPieIndex: function (array, key){
        for(var i=0;i<array.length;i++){
            if(array[i].keyword == key){
                return true;
            }
        }
        return false;
    },
    graph: function (url,elToShow,xAxis,yAxis){
        utils.displayGraph(elToShow,yAxis,xAxis,url);
    },
    mapTextToNumeric: function (original,data,time){
        var mapped =[];
        for(var v=0;v<data.length;v++)
            mapped.push([time[v],original.indexOf(data[v])]);
        return mapped;
    },
    findUnique: function (arr){
        var unique = [];
        for(var j=0;j<arr.length;j++){
            var t1 = unique.indexOf(arr[j]);
            var t2 = unique.lastIndexOf(arr[j]);
            if((t1==-1) && (t2==-1))
                unique.push(arr[j]);
        }
        var tmp = [];
        tmp.push('');
        for(var j=0;j<unique.length;j++){
            tmp.push(unique[j]);
        }
        return tmp;
    },
    addAxisNSeriesToChart: function (chart,name,data,opp,yAxis,yAxisLabels,key){
        chart.addAxis({
            title: {
                text: name,
                style:{
                }
            },
            labels:{
                formatter: function(){
                    for(var g=0;g<key.length;g++){
                        if(key[g]==name){
                            return yAxisLabels[name][(this.value)];
                        }
                    }
                    return this.value;
                },
                style: {
                }

            },
            opposite: opp
        });
        chart.addSeries({
            name: name,
            yAxis: yAxis,
            data: data
        });
    },
    displayGraph: function (divId,ids,xs,url) {
        var graphSeries =[];
        var yAxisLabels =[];
        var key=[];
        var tempYAxisLabels = [];
        for(var l=0;l<ids.length;l++)
            graphSeries[ids[l]] = [];
        for(var l=0;l<ids.length;l++)
            tempYAxisLabels[ids[l]] = [];
        var xValues= [];
        $.ajax({
            url: url,dataType:'json',type:'get',
            success:
            /*$.get('data1.json',*/function(data){

                //Parsing json
                var docs = $.parseJSON(data[0].docs);
                var skipFirst=false;
                //$.each(docs, function(index,element){
                for (var i=0;i<docs.length;i++){
                    /*if(!skipFirst){
                     skipFirst = true;
                     }
                     else*/{
                        var datetime =  new Date(parseInt(docs[i][xs]));
                        var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());

                        for(var p=0;p<ids.length;p++){
                            if(!isNaN(docs[i][ids[p]])){
                                graphSeries[ids[p]].push([timestamp,parseInt(docs[i][ids[p]])]);
                            }
                            else if(isNaN(docs[i][ids[p]]))  {
                                if(key.indexOf(ids[p])==-1)
                                    key.push(ids[p]);
                                //graphSeries[ids[p]].push([timestamp,(docs[i][ids[p]])]);
                                tempYAxisLabels[ids[p]].push(docs[i][ids[p]]);
                            }
                        }
                        xValues.push(timestamp);
                    }
                }
                for(var t=0;t<key.length;t++)
                    yAxisLabels[key[t]] = [];
                for (var t=0;t<key.length;t++){
                    yAxisLabels[key[t]] = findUnique(tempYAxisLabels[key[t]]);
                    graphSeries[key[t]] = mapTextToNumeric(yAxisLabels[key[t]],tempYAxisLabels[key[t]],xValues);
                }
                var chartOptions = {
                    chart: {
                        zoomType: 'x',
                        renderTo: divId
                    },
                    title: {
                        text: 'Data Extraction Monitor'
                    },
                    subtitle: {
                        text: ''
                    },
                    xAxis: [{ type: 'datetime'   }],
                    yAxis: [],
                    tooltip: { shared: true },
                    legend: {  x: 0, verticalAlign: 'top',  y: 40, floating: false, backgroundColor: '#FFFFFF', layout : 'horizontal' },
                    series: []
                };

                var chart = new Highcharts.Chart(chartOptions);
                for(var u=0;u<ids.length;u++){
                    if(u==0){
                        addAxisNSeriesToChart(chart,ids[u],graphSeries[ids[u]],false,u,yAxisLabels,key);
                    }
                    else{
                        addAxisNSeriesToChart(chart,ids[u],graphSeries[ids[u]],true,u,yAxisLabels,key);
                    }
                }
            }
        });
    },
    showHideGraphTab: function (graphType){
        $('#splineGraph').hide();
        $('#aggGraph').hide();
        $('#graph_download').addClass('open');
        $('#graph_download .my-dropdown-menu').css('display','none');
        $('#graph_download .my-dropdown-menu').slideDown();
        $("#graphType").val(graphType);
        if(graphType == 'aggregation'){
            $('#aggGraph').show();
            $('#combineGraph').hide();
        }else{
            if(graphType == 'spline'){
                $('#combineGraph').hide();
                $('#splineGraph').show();            }
            else{
                $('#aggGraph').hide();
                $('#combineGraph').show();
                if(graphType == 'donut'){
                    $('#labelSection').hide();
                }else{
                    $('#labelSection').show();
                }
            }
        }
        if($("#data_streams option:selected").val() !=''){
            //$('#graph_popup').modal({show : true, backdrop: 'static'});
            var aggregationData = aggregationDoc;
            var response_data = $.parseJSON(aggregationData);
            var docs = $.parseJSON(response_data[0].docs);
            var schema = $.parseJSON(response_data[0].schema);
            dataResultAggregation = docs;
            var xAxisData = '';
            for(var i=0;i<schema.length;i++){
                if(schema[i].type == 'timestamp'){
                    xAxisData +='<option value="'+schema[i].field+'" selected>'+schema[i].field+'('+schema[i].type+')</option>';
                }
            }
            $("#xAxis").html(xAxisData);
            //$("#xAxis").selectpicker('refresh');
            var preY =  $("#yAxis").val();
            var preLabel =  $("#label").val();
            var yAxisData = '';
            var label = '';
            yAxisData +='<option value="">Select Field</option>';
            label +='<option value="">Select Field</option>';
            for(var i=0;i<schema.length;i++){
                if(typeof schema[i].field != "undefined" && schema[i].type != 'timestamp' && schema[i].type != 'datetime'){
                    if(schema[i].field == preY){
                        yAxisData +='<option selected value="'+schema[i].field+'">'+schema[i].field+'('+schema[i].type+')</option>';
                    }
                    else{
                        yAxisData +='<option value="'+schema[i].field+'">'+schema[i].field+'('+schema[i].type+')</option>';
                    }
                }
            }
            $("#yAxis").html(yAxisData);
            $("#referenceYaxis1").html(yAxisData);
            //$("#yAxis").selectpicker('refresh');
            //$("#referenceYaxis1").selectpicker('refresh');
            for(var i=0;i<schema.length;i++){
                if(typeof schema[i].field != "undefined" && schema[i].type != 'timestamp' && schema[i].type != 'datetime'){
                    if(schema[i].field == preLabel){
                        label +='<option selected value="'+schema[i].field+'">'+schema[i].field+'('+schema[i].type+')</option>';
                    }
                    else{
                        label +='<option value="'+schema[i].field+'">'+schema[i].field+'('+schema[i].type+')</option>';
                    }
                }
            }
            $("#label").html(label);
            $("#rRefferenceField1").html(label);
            //$("#label").selectpicker('refresh');
            //$("#rRefferenceField1").selectpicker('refresh');
            $("#rRefferenceField1").change(function(){
                var docsData = dataResultAggregation;
                var referenceSelected = $("#rRefferenceField1 option:selected").val();
                var uniqueValues = uniqueFieldsData(docsData,referenceSelected);
                var uniqueOptions = '';
                for(var i=0;i<uniqueValues.length;i++){
                    uniqueValues[i] = uniqueValues[i].replace(/"/g,'');
                    uniqueOptions += '<option value="'+uniqueValues[i]+'">'+uniqueValues[i]+'</option>';
                }
                $("#refferenceValue1").html(uniqueOptions);
                //$("#refferenceValue1").selectpicker('refresh');
            });
        }

    },
    showHideGraphTabZoom: function (graphType){
        $('#graph_download_zoom').addClass('open');
        $('#graph_download_zoom .my-dropdown-menu').css('display','none');
        $('#graph_download_zoom .my-dropdown-menu').slideDown();
        $("#graphTypeZoom").val(graphType);
        if(graphType == 'aggregation'){
            $('#aggGraphZoom').show();
            $('#combineGraphZoom').hide();
            $('#splineGraphZoom').hide();
        }else{
            $('#aggGraphZoom').hide();
            $('#combineGraphZoom').show();
            if(graphType == 'donut'){
                $('#labelSectionZoom').hide();
                $('#splineGraphZoom').hide();
            }else if(graphType == 'spline'){
                $('#combineGraphZoom').hide();
                $('#splineGraphZoom').show();
                this.setSplineReferenceFieldsData('rRefferenceFieldZoom','refferenceValueZoom','referenceYaxisZoom');
            }else{
                $('#splineGraphZoom').hide();
                $('#labelSectionZoom').show();
            }
        }
        if($("#data_streams option:selected").val() !=''){
            //$('#graph_popup').modal({show : true, backdrop: 'static'});
            var aggregationData = aggregationDoc;
            var response_data = $.parseJSON(aggregationData);
            var schema = $.parseJSON(response_data[0].schema);
            var xAxisData = '';
            for(var i=0;i<schema.length;i++){
                if(schema[i].type == 'timestamp'){
                    xAxisData +='<option value="'+schema[i].field+'" selected>'+schema[i].field+'('+schema[i].type+')</option>';
                }
            }
            $("#xAxisZoom").html(xAxisData);
            //$("#xAxisZoom").selectpicker('refresh');
            var preY =  $("#yAxisZoom").val();
            var preLabel =  $("#labelZoom").val();
            var yAxisData = '';
            var label = '';
            yAxisData +='<option value="">Select Field</option>';
            label +='<option value="">Select Field</option>';
            for(var i=0;i<schema.length;i++){
                if(typeof schema[i].field != "undefined" && schema[i].type != 'timestamp' && schema[i].type != 'datetime'){
                    if(schema[i].field == preY){
                        yAxisData +='<option selected value="'+schema[i].field+'">'+schema[i].field+'('+schema[i].type+')</option>';
                    }
                    else{
                        yAxisData +='<option value="'+schema[i].field+'">'+schema[i].field+'('+schema[i].type+')</option>';
                    }
                }
            }
            $("#yAxisZoom").html(yAxisData);
            //$("#yAxisZoom").selectpicker('refresh');
            for(var i=0;i<schema.length;i++){
                if(typeof schema[i].field != "undefined" && schema[i].type != 'timestamp' && schema[i].type != 'datetime'){
                    if(schema[i].field == preLabel){
                        label +='<option selected value="'+schema[i].field+'">'+schema[i].field+'('+schema[i].type+')</option>';
                    }
                    else{
                        label +='<option value="'+schema[i].field+'">'+schema[i].field+'('+schema[i].type+')</option>';
                    }
                }
            }
            $("#labelZoom").html(label);
            //$("#labelZoom").selectpicker('refresh');
        }

    },
    setSplineReferenceFieldsData:function(reference,referenceValue,referenceYaxis){
        if($("#data_streams option:selected").val() !=''){
            //$('#graph_popup').modal({show : true, backdrop: 'static'});
            var aggregationData = aggregationDoc;
            var response_data = $.parseJSON(aggregationData);
            var schema = $.parseJSON(response_data[0].schema);
            var dataResult = $.parseJSON(response_data[0].docs);


            var xAxisData = '';
            var yAxisData = '';
            yAxisData +='<option value="">Select Field</option>';
            for(var i=0;i<schema.length;i++){
                if(typeof schema[i].field != "undefined" && schema[i].type != 'timestamp'){
                    xAxisData +='<option value="'+schema[i].field+'" selected>'+schema[i].field+'('+schema[i].type+')</option>';
                }
            }
            for(var i=0;i<schema.length;i++){
                if(typeof schema[i].field != "undefined" && schema[i].type != 'timestamp' && schema[i].type != 'datetime'){
                    yAxisData +='<option value="'+schema[i].field+'">'+schema[i].field+'('+schema[i].type+')</option>';
                }
            }
            $("#"+reference).html(xAxisData);
            $("#"+referenceYaxis).html(yAxisData);
            //$("#"+reference).selectpicker('refresh');
            $("#"+referenceYaxis).multiselect("refresh").multiselectfilter();
            $("#"+reference).change(function(){
                var docsData = dataResult;
                var referenceSelected = $("#"+reference+" option:selected").val();
                var uniqueValues = uniqueFieldsData(docsData,referenceSelected);
                var uniqueOptions = '';
                for(var i=0;i<uniqueValues.length;i++){
                    uniqueValues[i] = uniqueValues[i].replace(/"/g,'');
                    uniqueOptions += '<option value="'+uniqueValues[i]+'">'+uniqueValues[i]+'</option>';
                }
                $("#"+referenceValue).html(uniqueOptions);
                //$("#"+referenceValue).selectpicker('refresh');
            });
        }
    },
    addContainer: function(containerGroupVal,containerGroupText,type){

        var groupType = containerGroupVal;//$("#container_group :selected").val();

        if (groupType != ''){

            var containerLabel = containerGroupText;//$("#container_group :selected").text();
            containerLabel = containerLabel.replace(/:/g,'_');
            containerLabel= containerLabel.replace('.', '_');
            var containerTypeValue = containerGroupVal;//$("#container_group :selected").val();

            var typeIndex = types.indexOf(containerTypeValue);

            if (typeIndex == -1){

                types.push(containerTypeValue);
                var addRangesFunction = "utils.addRanges(this,'"+containerTypeValue+"');";
                var selectedType = '';
                if(type == 'default'){
                    selectedType ='selected';
                }
                $('#containerList').append(
                    '<div class="well" style="padding: 5px 10px; margin-bottom: 5px;">'+
                        '<div id="filter-row-'+filterCounter+'" class="controls filter-row">'+
                        '<div id="filter-row-'+filterCounter+'name" class="span4" style="float: none; display: inline-block; position: relative; top: 4px;">'+ containerTypeValue +'</div>'+
                        '<div style="width: 23.0769%; display: inline-block; position: relative; top: 3px;">'+
                        '<select id="filter-row-'+filterCounter+'type" name="container_group" onChange="'+addRangesFunction+'">'+
                        '<option value="">Select Type</option>'+
                        '<option value="radio">Exclusive Selection</option>'+
                        '<option value="checkbox" '+selectedType+'>Multi-Select</option>'+
                        '<option value="boolean">Boolean</option>'+
                        '<option value="range">Range</option>'+
                        '</select>'+
                        '</div>'+
                        '<input id="filter-row-'+filterCounter+'label" class="span4" style="float: none; display: inline-block; margin: 0 0 0 10px; height: 30px; position: relative; top: 3px;" type="text" value="'+containerLabel+'">'+
                        ' <img src="../../images/cross1.png" id="filter-row-'+filterCounter+'Remove" alt="Remove" style="cursor: pointer; margin: 6px 0 0 19px;" title="Remove" border="0" onclick="$(this).parent().parent().remove(); removeRow(\''+ containerTypeValue+'\');" />'+
                        '</div></div>'
                );
                $("#filter-row-"+filterCounter+"type").multiselect({
                    multiple: false,
                    classes: 'my-select',
                    selectedList: 1
                }).multiselectfilter();
                filterCounter++;
            }
            else {
                utils.displayAlert("Duplicate value.","error");
            }

        } else {
            utils.displayAlert("Please select type first.","error");
        }
    },
    drawFilterData: function(defaultType){
        var status = utils.getDashBoardFilterData();
        var rangeValidation = true;
        if (status){
            $(".dash-board-filter").empty();
            $("#filterContainer").empty();
            $("#filterModalContainer").empty();
            for(var i=0; i<filterContainers.length; i++){
                $("#filterContainer").append(
                    '<div id="'+ utils.trimWhiteSpaces(filterContainers[i].label)+'" class="filter-container'+filterContainers[i].label+' well" style="width: 90%; margin: 30px auto 0px auto; border-color: #355D81;">' +
                        '<div class="filter-container-label">'+filterContainers[i].label+'</div>' +
                        '<div class="filter-container-fields">' +
                        '</div>'
                );
                $("#filterModalContainer").append(
                    '<div id="'+ utils.trimWhiteSpaces(filterContainers[i].label)+'" class="filter-container-zoom'+filterContainers[i].label+' well" style="width: 90%; margin: 30px auto 0px auto; border-color: #355D81;">' +
                        '<div class="filter-container-label-zoom">'+filterContainers[i].label+'</div>' +
                        '<div class="filter-container-fields-zoom">' +
                        '</div>'
                );
            }

            $(".filter-container-fields").empty();
            $(".filter-container-fields-zoom").empty();
            var fields = [];

            for(var i=0; i<filterContainers.length; i++){

                var field = filterContainers[i].name;
                colorKey = field;
                var type  = filterContainers[i].type;
                var label = filterContainers[i].label;
                var allFields = [];
                for(var j=0;j<filtersSchema.length;j++){
                    if(filtersSchema[j].field == field){
                        for(var k=0;k<filterDocs.length;k++){
                            if(allFields.length>0){
                                if(!utils.checkExistsInArray(allFields,filterDocs[k][filtersSchema[j].field])){
                                    allFields.push(filterDocs[k][filtersSchema[j].field]);
                                }
                            }else{
                                allFields.push(filterDocs[k][filtersSchema[j].field]);
                            }
                        }
                    }
                }
                if(type=="radio"){
                    for (var j=0; j<allFields.length; j++){
                        var fieldset_id = utils.trimWhiteSpaces(filterContainers[i].label) + " .filter-container-fields";
                        var fieldset_id_zoom = utils.trimWhiteSpaces(filterContainers[i].label) + " .filter-container-fields-zoom";
                        var radioName = field.replace(/ /g,'!');
                        /*var r = Math.floor(Math.random()*(255-0+1)+0);
                         var g = Math.floor(Math.random()*(255-0+1)+0);
                         var b = Math.floor(Math.random()*(255-0+1)+0);
                         var color = "rgb("+ r + ","+ g + "," + b +")";*/
                        var color = colorsArray[j]
                        pointsColor[allFields[j]] = color;
                        if(j>0){
                            $("#"+fieldset_id_zoom).append('<input type="radio" class="radio_filters_zoom" value="'+allFields[j]+'" name="'+radioName+'" style="float: left; margin-right: 10px;" /><label style="color:'+color+'">'+allFields[j]+'</label>')
                            $("#"+fieldset_id).append('<input type="radio" class="radio_filters" value="'+allFields[j]+'" name="'+radioName+'" style="float: left; margin-right: 10px;" /><label style="color:'+color+'">'+allFields[j]+'</label>')
                        }else{
                            $("#"+fieldset_id_zoom).append('<input type="radio" class="radio_filters_zoom" value="'+allFields[j]+'" name="'+radioName+'" style="float: left; margin-right: 10px;" checked /><label style="color:'+color+'">'+allFields[j]+'</label>')
                            $("#"+fieldset_id).append('<input type="radio" class="radio_filters" value="'+allFields[j]+'" name="'+radioName+'" style="float: left; margin-right: 10px;" checked /><label style="color:'+color+'">'+allFields[j]+'</label>')
                        }
                    }
                }
                else if (type=="checkbox"){
                    for (var j=0; j<allFields.length; j++){

                        var fieldset_id = utils.trimWhiteSpaces(filterContainers[i].label) + " .filter-container-fields";
                        var fieldset_id_zoom = utils.trimWhiteSpaces(filterContainers[i].label) + " .filter-container-fields-zoom";
                        var checkName = field.replace(/ /g,'!');
                        /*var r = Math.floor(Math.random()*(255-0+1)+0);
                         var g = Math.floor(Math.random()*(255-0+1)+0);
                         var b = Math.floor(Math.random()*(255-0+1)+0);
                         var color = "rgb("+ r + ","+ g + "," + b +")";*/
                        var color = colorsArray[j];
                        pointsColor[allFields[j]] = color;
                        if(defaultType == 'default'){
                            $("#"+fieldset_id_zoom).append('<input type="checkbox" class="checkbox_filters_zoom" value="'+allFields[j]+'" checked="checked" name="'+checkName+'" style="float: left; margin-right: 10px;" /><label style="color:'+color+'">'+allFields[j]+'</label>');
                            $("#"+fieldset_id).append('<input type="checkbox" class="checkbox_filters" value="'+allFields[j]+'" checked="checked" name="'+checkName+'" style="float: left; margin-right: 10px;" /><label style="color:'+color+'">'+allFields[j]+'</label>');
                        }else{
                            $("#"+fieldset_id_zoom).append('<input type="checkbox" class="checkbox_filters_zoom" value="'+allFields[j]+'" name="'+checkName+'" style="float: left; margin-right: 10px;" checked /><label style="color:'+color+'">'+allFields[j]+'</label>');
                            $("#"+fieldset_id).append('<input type="checkbox" class="checkbox_filters" value="'+allFields[j]+'" name="'+checkName+'" style="float: left; margin-right: 10px;" checked /><label style="color:'+color+'">'+allFields[j]+'</label>');
                        }

                    }
                }
                else if (type=="boolean"){
                    var docsData = filterDocs;
                    var fieldset_id = utils.trimWhiteSpaces(filterContainers[i].label) + " .filter-container-fields";
                    var fieldset_id_zoom = utils.trimWhiteSpaces(filterContainers[i].label) + " .filter-container-fields-zoom";
                    var checkName = field.replace(/ /g,'!');
                    /*var r = Math.floor(Math.random()*(255-0+1)+0);
                     var g = Math.floor(Math.random()*(255-0+1)+0);
                     var b = Math.floor(Math.random()*(255-0+1)+0);
                     var color = "rgb("+ r + ","+ g + "," + b +")";*/
                    var color = colorsArray[0];
                    for(var i=0;i<docsData.length;i++){
                        if(docsData[i][field] =='' || docsData[i][field] == 'na'){
                            pointsColor[docsData[i][field]] = color;
                        }
                    }
                    $("#"+fieldset_id).append('<input type="radio" class="boolean_filters" value="empty" name="'+checkName+'" style="float: left; margin-right: 10px;" /><label style="color:'+color+'">Empty</label>');
                    $("#"+fieldset_id_zoom).append('<input type="radio" class="boolean_filters_zoom" value="empty" name="'+checkName+'" style="float: left; margin-right: 10px;" /><label style="color:'+color+'">Empty</label>');
                    /*var r = Math.floor(Math.random()*(255-0+1)+0);
                     var g = Math.floor(Math.random()*(255-0+1)+0);
                     var b = Math.floor(Math.random()*(255-0+1)+0);
                     var color = "rgb("+ r + ","+ g + "," + b +")";*/
                    var color = colorsArray[1];

                    for(var i=0;i<docsData.length;i++){
                        if(docsData[i][field] !='' && docsData[i][field] != 'na'){
                            pointsColor[docsData[i][field]] = color;
                        }
                    }
                    $("#"+fieldset_id_zoom).append('<input type="radio" class="boolean_filters_zoom" value="nonempty" name="'+checkName+'" style="float: left; margin-right: 10px;" checked /><label style="color:'+color+'">Non Empty</label>');
                    $("#"+fieldset_id).append('<input type="radio" class="boolean_filters" value="nonempty" name="'+checkName+'" style="float: left; margin-right: 10px;" checked /><label style="color:'+color+'">Non Empty</label>');
                }
                else if(type=="range"){

                    $(".range-class").each(function(index,elem){
                        var inputLabel =  $(elem).find('input[name="rangesLabel"]').val();
                        var minRange =  $(elem).find('input[name="rangesMin"]').val();
                        var maxRange =  $(elem).find('input[name="rangesMax"]').val();
                        if(inputLabel == ''){
                            utils.displayAlert("Range label should not be empty.","error");
                            rangeValidation = false;
                        }else if(minRange == ''){
                            utils.displayAlert("Range Min should not be empty.","error");
                            rangeValidation = false;
                        }else if(maxRange == ''){
                            utils.displayAlert("Range Max should not be empty.","error");
                            rangeValidation = false;
                        }else{
                            rangeValidation = true;
                        }
                    });
                    if(rangeValidation){
                        var fieldset_id = utils.trimWhiteSpaces(filterContainers[i].label) + " .filter-container-fields";
                        var fieldset_id_zoom = utils.trimWhiteSpaces(filterContainers[i].label) + " .filter-container-fields-zoom";
                        $(".range-class").each(function(index,elem){
                            var inputLabel =  $(elem).find('input[name="rangesLabel"]').val();
                            var minRange =  $(elem).find('input[name="rangesMin"]').val();
                            var maxRange =  $(elem).find('input[name="rangesMax"]').val();
                            var value = minRange+'-'+maxRange;
                            /*var r = Math.floor(Math.random()*(255-0+1)+0);
                             var g = Math.floor(Math.random()*(255-0+1)+0);
                             var b = Math.floor(Math.random()*(255-0+1)+0);
                             var color = "rgb("+ r + ","+ g + "," + b +")";*/
                            var color = colorsArray[index];

                            var docsData = filterDocs;
                            for(var i=0;i<docsData.length;i++){
                                if(parseInt(docsData[i][field]) >= minRange && parseInt(docsData[i][field]) <= maxRange){
                                    pointsColor[docsData[i][field]] = color;
                                }
                            }
                            if(index>0){
                                $("#"+fieldset_id_zoom).append('<input type="radio" class="range_filters_zoom" value="'+value+'" name="'+field.replace(/ /g,'!')+'" style="float: left; margin-right: 10px;"  title="'+inputLabel+'"  /><label style="color:'+color+'">'+inputLabel+'</label>');
                                $("#"+fieldset_id).append('<input type="radio" class="range_filters" value="'+value+'" name="'+field.replace(/ /g,'!')+'" style="float: left; margin-right: 10px;"  title="'+inputLabel+'"  /><label style="color:'+color+'">'+inputLabel+'</label>');
                            }else{
                                $("#"+fieldset_id_zoom).append('<input type="radio" class="range_filters_zoom" value="'+value+'" name="'+field.replace(/ /g,'!')+'" style="float: left; margin-right: 10px;" checked title="'+inputLabel+'" /><label style="color:'+color+'">'+inputLabel+'</label>');
                                $("#"+fieldset_id).append('<input type="radio" class="range_filters" value="'+value+'" name="'+field.replace(/ /g,'!')+'" style="float: left; margin-right: 10px;" checked title="'+inputLabel+'" /><label style="color:'+color+'">'+inputLabel+'</label>');
                            }
                        });
                    }

                }
            }
            if(rangeValidation && status){
                $('#filterModal').modal('hide');
            }
        }

        _.defer(function(){
            $("#filterContainer").mCustomScrollbar();
            $("#filterModalContainer").mCustomScrollbar();
        });
        var docsData = filterDocs;
        var label_field = realTimeLabel;
        var newDoc = [];
        var pivots = realTimePivotes;
        $('#real_time').replaceWith($('<div>').attr('id', 'real_time'));
        $('#real_time').css('height', '220px');
        if(defaultType == 'default'){
            if($("#realGType").val() == 'rTime'){
                utils.realTimeGraph(pivots,docsData,'real_time',label_field);
            }
        }else{
            if(types.length > 0){
                var checkBoxArray = [];
                var radioBoxArray = [];
                var booleanArray = [];
                var rangeArray = [];
                $(".radio_filters").each(function(){
                    if($(this).attr('checked')){
                        var field = $(this).attr('name');
                        field = field.replace(/!/g,' ');
                        var field_value = $(this).val();
                        radioBoxArray.push({field:field,value:field_value});
                    }
                });
                $(".checkbox_filters").each(function(){
                    if($(this).attr('checked')){
                        var field = $(this).attr('name');
                        field = field.replace(/!/g,' ');
                        var field_value = $(this).val();
                        checkBoxArray.push({field:field,value:field_value});
                    }
                });
                $(".boolean_filters").each(function(){
                    if($(this).attr('checked')){
                        var field = $(this).attr('name');
                        field = field.replace(/!/g,' ');
                        var field_value = $(this).val();
                        booleanArray.push({field:field,value:field_value});
                    }
                });
                $(".range_filters").each(function(){
                    if($(this).attr('checked')){
                        var field = $(this).attr('name');
                        field = field.replace(/!/g,' ');
                        var field_value = $(this).val().split('-');
                        var min  = parseInt(field_value[0]);
                        var max  = parseInt(field_value[1]);
                        var range_label = $(this).attr('title');
                        rangeArray.push({field:field,min:min,max:max,label:range_label});
                    }
                });
                if(rangeArray.length>0){
                    for(var i=0;i<docsData.length;i++){
                        for(var j=0;j<rangeArray.length;j++){
                            if(docsData[i][rangeArray[j].field] >=rangeArray[j].min && docsData[i][rangeArray[j].field] <= rangeArray[j].max){
                                newDoc.push(docsData[i]);
                                break;
                            }
                        }
                    }
                }
                if(booleanArray.length>0){
                    for(var i=0;i<docsData.length;i++){
                        for(var j=0;j<booleanArray.length;j++){
                            if(booleanArray[j].value == 'empty'){
                                if(docsData[i][booleanArray[j].field] == 'na' || docsData[i][booleanArray[j].field] == ''){
                                    newDoc.push(docsData[i]);
                                    break;
                                }
                            }else if(booleanArray[j].value == 'nonempty'){
                                if(docsData[i][booleanArray[j].field] != 'na' && docsData[i][booleanArray[j].field] != ''){
                                    newDoc.push(docsData[i]);
                                    break;
                                }
                            }

                        }
                    }
                }
                if(checkBoxArray.length>0){
                    for(var i=0;i<docsData.length;i++){
                        for(var j=0;j<checkBoxArray.length;j++){
                            if(docsData[i][checkBoxArray[j].field] == checkBoxArray[j].value){
                                newDoc.push(docsData[i]);
                                break;
                            }
                        }
                    }
                }
                if(radioBoxArray.length>0){
                    for(var i=0;i<docsData.length;i++){
                        for(var j=0;j<radioBoxArray.length;j++){
                            if(docsData[i][radioBoxArray[j].field] == radioBoxArray[j].value){
                                newDoc.push(docsData[i]);
                                break;
                            }
                        }
                    }
                }
                if(newDoc.length >0){
                    filterDocsData = newDoc;
                    utils.realTimeGraph(pivots,newDoc,'real_time',label_field);
                }
            }
            else{
                if(docsData.length >0){
                    filterDocsData = docsData;
                    utils.realTimeGraph(pivots,docsData,'real_time',label_field);
                }
            }
        }

    },
    addNewRange: function (field){
        var rangeDivText = '<div class="well" style="padding: 5px 10px; margin-bottom: 5px;">';
        rangeDivText += '<div class="controls range-class"><input name="fieldName" class="span3 field-name" style="margin-left: 10px;" type="hidden" value="'+field+'">';
        rangeDivText += '<input name="rangesLabel" class="span4 ranges-label" style="margin-left: 10px;" type="text" value="" placeholder="Range Label">';
        rangeDivText += '<input name="rangesMin" class="span3 ranges-min" style="margin-left: 10px;" type="text" value="" placeholder="Range Min">';
        rangeDivText += '<input name="rangesMax" class="span3 ranges-max" style="margin-left: 10px;" type="text" value="" placeholder="Range Max">';
        rangeDivText += '<img src="../../images/cross1.png"  alt="Remove" style="cursor: pointer; margin-left: 19px;" title="Remove" border="0" onclick="$(this).parent().parent().remove();" />';
        rangeDivText += '</div></div>';
        $('#containerList').append(rangeDivText);
    },

    checkExistsInArray: function(array,key){
        for(var i=0;i<array.length;i++){
            if(array[i] == key){
                return true;
            }
        }
        return false;
    },
    addRanges: function(elm,field){
        var value = elm.value;
        if(value == 'range'){
            var rangeDivText = '<div id="add_range" style="margin-top: 10px;margin-bottom: 10px;"><a href="javascript:void(0);" onclick="utils.addNewRange(\''+field+'\');"><b>Add Ranges</b></a></div>';
            rangeDivText += '<div class="well" style="padding: 5px 10px; margin-bottom: 5px;">';
            rangeDivText += '<div class="controls range-class"><input name="fieldName" class="span3 field-name" style="margin-left: 10px;" type="hidden" value="'+field+'">';
            rangeDivText += '<input name="rangesLabel" class="span4 ranges-label" style="margin-left: 10px;" type="text" value="" placeholder="Range Label">';
            rangeDivText += '<input name="rangesMin" class="span3 ranges-min" style="margin-left: 10px;" type="text" value="" placeholder="Range Min">';
            rangeDivText += '<input name="rangesMax" class="span3 ranges-max" style="margin-left: 10px;" type="text" value="" placeholder="Range Max">';
            rangeDivText += '<img src="../../images/cross1.png"  alt="Remove" style="cursor: pointer; margin-left: 19px;" title="Remove" border="0" onclick="$(this).parent().parent().remove();" />';
            rangeDivText += '</div></div>';
            $('#containerList').append(rangeDivText);
        }else{
            $('#add_range').remove();
            $(".range-class").parent().remove();
        }
    },

    /////////////////////////////////////////////////////////////Line Graph/////////////////////////////////////////////

    zoomableLineGraph:function(data,containerDiv,yAxis,keywordField,aggregationText){


//    console.log(data);
//    var response_data = $.parseJSON(data);
        var docs = data; //$.parseJSON(response_data[0].docs);
//    var schema = $.parseJSON(response_data[0].schema);


        if(typeof docs != "undefined"){

//        var containerDiv = 'real_time';
            var series = [{name:yAxis,data:[]}];
            var tempYAxisLabels = [];

            var xValues = [];
            var yAxisLabels =[];
            var flag=false;
            var skipFirst= false;
            /*$.each(fields_to_monitor,function(index,field){
             series.push({name:field,data:[]});
             });*/

//        var initialFeed= (response_data[0].docs.length > 15)?15:response_data[0].docs.length;
            if(keywordField != ""){
                var tooltipKeyword = [];
                var tooltips =[];
                var keywordsData =[];
                var keyword= keywordField;

                for(var i=0; i < docs.length;i++ ){

                    var record = docs[i];

//            console.log(record);
//            console.log(yAxis);
                    for (var key in record){

                        var datetime =  new Date(parseInt(record.timestamp));
                        var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
                        for(var j = 0; j < series.length; j++ ){

                            if(key.toLowerCase() == series[j].name.toLowerCase() && typeof record[key] != "undefined"){

                                if( record[key]==""){

                                    tooltipKeyword["0"] = [];
                                    tooltipKeyword["0"].push(record[keyword]);
                                    series[j].data.push([timestamp,0]);

                                }else if(isNaN((record[key]))== false){

                                    tooltipKeyword[timestamp+parseInt(record[key])] = [];
                                    tooltipKeyword[timestamp+parseInt(record[key])].push(record[keyword]);
                                    // console.log( record[key] + " :: "+(record[keyword]));
                                    series[j].data.push([timestamp,parseInt(record[key])]);

                                }else{
//                                tooltipKeyword["0"] = [];
//                                tooltipKeyword["0"].push(record[keyword]);
                                    if(!skipFirst){
                                        skipFirst=true;
                                        tempYAxisLabels[yAxis]=[];
                                    }
                                    /*else*/{
                                        //series[j].data.push([timestamp,0]);
                                        //graphSeries[ids[p]].push([timestamp,(docs[i][ids[p]])]);

                                        flag=true;
                                        tempYAxisLabels[key].push(record[key]);
                                        //tooltips.push(record[key]);
                                        xValues.push(timestamp);
                                        keywordsData.push(record[keyword]);
                                    }
                                }
                            }
                        }
                    }
                }
            }else{

                for(var i=0; i < docs.length;i++ ){

                    var record = docs[i];

//           // console.log(record);
//          //  console.log(yAxis);
                    for (var key in record){

                        var datetime =  new Date(parseInt(record.timestamp));
                        var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
                        for(var j = 0; j < series.length; j++ ){

                            if(key.toLowerCase() == series[j].name.toLowerCase() && typeof record[key] != "undefined"){

                                if( record[key]==""){
                                    series[j].data.push([timestamp,0]);
                                }else if(isNaN((record[key]))== false){
                                    series[j].data.push([timestamp,parseInt(record[key])]);
                                    //console.log(j);
                                }else{
                                    if(!skipFirst){
                                        skipFirst=true;
                                        tempYAxisLabels[yAxis]=[];
                                    }
                                    /*else*/{
                                        //series[j].data.push([timestamp,0]);
                                        //graphSeries[ids[p]].push([timestamp,(docs[i][ids[p]])]);
                                        //console.log(key);
                                        flag=true;
                                        tempYAxisLabels[key].push(record[key]);
                                        xValues.push(timestamp);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if(flag){

                yAxisLabels[yAxis] = findUnique(tempYAxisLabels[yAxis]);
                //console.log(tempYAxisLabels[yAxis]);

                series[0].data = mapTextToNumeric(yAxisLabels[yAxis],tempYAxisLabels[yAxis],xValues);

                if(keywordField != "" && flag){
                    for(var r=0;r<tempYAxisLabels[yAxis].length;r++){
                        tooltips.push(yAxisLabels[yAxis].indexOf(tempYAxisLabels[yAxis][r]));
                    }
                    for(var i=0;i<series[0].data.length; i++){
                        tooltipKeyword[xValues[i]+tooltips[i]] = [];
                        tooltipKeyword[xValues[i]+tooltips[i]].push(keywordsData[i]);
                    }
                }

            }
            var options = {

                credits: {
                    enabled: false
                },
                title: {
                    text:aggregationText
                },
                chart: {
//                renderTo: containerDiv,
                    zoomType: 'x'
                },

                yAxis: {
                    title: {
                        text: yAxis
                    },
                    labels:{
                        formatter: function(){
                            if(flag){
                                return yAxisLabels[yAxis][(this.value)];
                            }
                            return this.value;
                        }
                    }
                },
                xAxis: {

                    type: 'datetime'

                },

                series: series
            };
            if( keywordField!="" ){
                //console.log(tooltipKeyword);
                options.tooltip =  {
                    formatter: function(){
                        //console.log('\n'+ this.y);
                        return tooltipKeyword[this.x+this.y][0]+ " : " + this.y;
                    }
                }
            }
            $(containerDiv).highcharts(options);

        }
    },
    ////////////////////////////////////////////// Multiple y-axis ////////////////////////////////////////////

    multipleAxisGraph:function(data,elToShow,xAxis,yAxis,labels,aggregationText){

        //displayGraph(elToShow,yAxis,xAxis,url);
        if(labels.length<yAxis.length){
            for(var t=labels.length;t<yAxis.length;t++){
                labels.push(yAxis[t]);
            }
        }
        displayMultipleAxisGraph(elToShow,yAxis,xAxis,data,labels,aggregationText);
    },
    //////////////////////////////////// Spline Graph //////////////////////////////////////////////////////////////////////

    splineGraph:function(data,divId,xAxis,yAxis,label,aggregationText){

        if(typeof data != "undefined")
            displaySplineGraph(divId,label,xAxis,yAxis,data,aggregationText);

    },
    //////////////////////////////////////////////////// Do nut graph /////////////////////////////////////////////////////////


    donutGraph:function(data,el,xAxis,yAxis,countKey,aggregationText){

//    var countKey = "orders by os browser version";
        countValueSum = 0;
        drawDonut(data,yAxis,el,countKey,aggregationText);
    },
///////////////////////////////////////////////////////Time Series Area Graph//////////////////////////
    drawTimeAreaGraph:function(data, el, xAxis, yAxis, label){

        timeAreaGraph(data, el, xAxis, yAxis, label);
    },
    drawTimeAreaCompositeGraph:function(data, el, xAxis, yAxis, label){

        timeAreaCompositeGraph(data, el, xAxis, yAxis, label);
    },
    /////////////////////////////////////////////////Time-Line Bar Graph///////////////////////////////////////
    drawTimelineBarGraph:function(data, el, xAxis, yAxis, label,aggregationText){

        timelineBarGraph(data, el, xAxis, yAxis, label,aggregationText);
    },
    drawTimelineBarCompositeGraph:function(data, el, xAxis, yAxis, label,aggregationText){
        timelineBarCompositeGraph(data, el, xAxis, yAxis, label,aggregationText);
    },

    /////////////////////////////////////////////////pie Chart Graph///////////////////////////////////////
    drawPieChart:function(data,el,yAxis,keyword,aggregationText,subTitle){
        pieChartDraw(data,el,yAxis,keyword,aggregationText,subTitle);
        /*if(!flag)
        {
            pieChart(data,el,xAxis,yAxis,keyword,aggregationText,subTitle);
        }
        else{
            pieChart2(data,el,xAxis,yAxis,keyword,aggregationText,subTitle);
        }*/
    },
    ///////////////////////////////////////////////Time Line Real time  graph////////////////
    drawTimelineRealTimeGraph:function(data, el, xAxis, yAxis, label,aggregationText){

        timelineRealTimeGraph(data, el, xAxis, yAxis, label,aggregationText);
    },

    ///////////////////////////////////////Time Line Multiple Series///////////////////////////////////
    drawCompareMultipleSeries:function(data, el, xAxis, yAxis, label,aggregationText){

        compareMultipleSeries(data, el, xAxis, yAxis, label,aggregationText);
    },
    drawCompareMultipleSeriesComposite:function(data, el, xAxis, yAxis, label,aggregationText){
        compareMultipleSeriesComposite(data, el, xAxis, yAxis, label,aggregationText);
    },
    //////////////////////////////////////////spline Graph/////////////////////////////////////
    drawMultiDimensionalRealTimeSplineGraph:function(data, el, xAxis, yAxis,referenceField,values,aggText){

        multiDimensionalRealTimeSplineGraph(data, el, xAxis, yAxis,referenceField,values,aggText);
    },
    //////////////////////////////////////////Bar Graph ///////////////////////////////////////////
    drawBarGraph:function( data, el, xAxis, yAxis, label,aggregationText ){


        barGraph1(data,el,yAxis,label,aggregationText);
        //barGraph( data, el, xAxis, yAxis, label,aggregationText );
    },
    drawScatterPlot:function(data,el,xAxis,yAxis,aggregationText){

        scatterPlot(data,el,xAxis,yAxis,aggregationText)
    },
    ///////////////////////////////////////Multi Axis Graph ////////////////////////////////////////
    drawMultiAxisGraph: function(data,el,xAxis,yAxis,aggregationText){
        multiAxisGraph(data,el,xAxis,yAxis,aggregationText);
    },

////////////////////////////////////////////HIerarchy Graph Code////////////////////////////////////
    HierarchyStart: function(data,levels,div){
        var w = 1000,
            h = 2000,
            i = 0,
            barHeight = 20,
            barWidth = w * .8,
            duration = 400;
        //  root;

        hieTree= d3.layout.tree()
            .size([h, 200]);

        diagonal = d3.svg.diagonal()
            .projection(function(d) { return [d.y, d.x]; });

        vis= d3.select("#"+div).append("svg:svg")
            .attr("width", w)
            .attr("height", h)
            .append("svg:g")
            .attr("transform", "translate(20,30)");



        /* console.log("service Jason");
         console.log(json);*/
        //json = getHirarichalData(data,['employe','city','country',])

        //var result =  groupByLevel(databa, [ "city","country", "employe"] );
        //var result =  check(databa, ["employe","country"]);
        if(data!=undefined || levels!=undefined)
        {
            var result =  check(data,levels);
            //var remata=check(data,remainingKeys)
            remainingKeysData=groupByLevelRemaining(data,remainingKeys)
            // console.log(remainingKeysData)
            // console.log("rRemaininig Keys Data");
            // var yourJson = JSON.stringify(result);
            // console.log("My Jason")
            // console.log(result);
            var json=result;
            json.x0 = 0;
            json.y0 = 0;
            hieRoot=json;
            /*console.log("tree");
             console.log(hieTree);*/
            update(hieRoot,hieRoot);

            /*d3.json("http://localhost:3030/getJason", function(json) {
             json.x0 = 0;
             json.y0 = 0;
             update(root = json);
             });
             */
        }
    }
////////////////////////////////////////////HIerarchy Graph Code////////////////////////////////////



};

////////////////////////// DynaTree utils ///////////////////////////////////

var leafNodes = [];
var paths = [];


var breadcrum = '';
var deSelected = false;

var streamName = '';
var streamType = '';
var startEndtag = '';
var streamId = '';
//var smallestEntity = '';
var tagsArray = [];
var fixedTags = [];
var selectedStreamTags = [];
var editStructure = [];
var defaultJobs = [];
$.ajax({
    url:Constants.URL_PREFIX+'/datatypes',
    type: 'GET',
    success:function(data){
        if(data.status){
            var dataTypesArray = data['doc'];
            var datatypesObj = [];
            for(var i=0;i<dataTypesArray.length;i++){
                datatypesObj.push(dataTypesArray[i].name);
            }
            var newArray = datatypesObj.sort();
            datatypes = newArray;
        }
    }
});
$.ajax({
    url: Constants.URL_PREFIX+"/tags",
    type: 'GET',
    success: function(data){
        if(typeof data['doc'] != 'undefined')
        {
            var tags = data['doc'];
            for (var i = 0; i < tags.length; i++) {
                if(tags[i].name !=''){
                    if(tags[i].type.toLowerCase() == 'fixed'){
                        fixedTags.push(tags[i]);
                    }
                    else{
                        tagsArray.push(tags[i]);
                    }
                }
            }
        }
    }
});
$.ajax({
    url: Constants.URL_PREFIX+"/defaultjob",
    success: function(data){
        if(typeof data['doc'] != 'undefined')
        {
            //defaultJobs.clear();
            var jobsD = data['doc'];
            for (var i = 0; i < jobsD.length; i++) {
                defaultJobs.push(jobsD[i]);
            }
        }
    }
});

var treeObj = {};

var keysArray = [];

function csvToArray(contents){

    keysArray = [];
    var csvKeyVal = {};
    var  cols;

    var allLines = contents.split('\n');    // all lines of the file

    $.each(allLines, function(index, value){

        if(index == 0)
        {
            cols =  value.split(',');     // all columns
            keysArray = cols;
            cols = $(cols).map(String.prototype.trim);
            $.each(cols,function(i,v){

                v = v.replace(/[^a-z0-9\s]/gi, '');

                csvKeyVal[v] = new Array();
            });

        }
        else
        {
            var vals =  value.split(',');
            $.each(cols, function(i,v){
                v = v.replace(/[^a-z0-9\s]/gi, '');
                var key =  csvKeyVal[v];
                csvKeyVal[v][key.length ] =  vals[i];

            });
        }

    });

    return csvKeyVal;

}

function dynaTreeFromCSV(data,schemaInfo)
{

    var nodes = [];

    var allLines = data.split(/\r?\n/);

    $.each(allLines[0].split(','),function(index,column){
        nodes.push({title:column,path:[column], dataType : "text", category:"pivot", alias:column,index:'true', key:schemaInfo.data_definition_id+column,isSchema:true,data_definition_name: schemaInfo.data_definition_name,data_definition_id:schemaInfo.data_definition_id,position:index,val_position:"",is_mapped:"false",mapped_from:""});
    });

    return nodes;
}

function dynaTreeFromLogFile(data,splitters,schemaInfo)
{

    var nodes = [];

    var regEx = new RegExp("["+splitters +"]");
    var allLines = data.split(/\r?\n/);

    $.each(allLines[0].split(regEx),function(index,column){
        nodes.push({title:column,path:[column], dataType : "text", category:"pivot", alias:column,index:'true', key:schemaInfo.data_definition_id+column,isSchema:true,data_definition_name: schemaInfo.data_definition_name,data_definition_id:schemaInfo.data_definition_id,position:index,val_position:"",is_mapped:"false",mapped_from:""});
    });

    return nodes;
}

function dynaTreeFromUnstructuredData(data,data_definition_id,data_definition_name)
{
    var nodes = [];
    $.each(data,function(index, obj){


        var node = {title:obj.alias,path:obj.alias, key:obj.alias,isSchema:true,data_definition_name: data_definition_name,data_definition_id:data_definition_id,position:index}
        if(typeof obj.uniqueAttribs != "undefined" && obj.uniqueAttribs.length > 0)
        {
            node.children = [];

            node.val_position = obj.attrValueColumnPosition;
            node.category = "attribute";

            $.each(obj.uniqueAttribs, function(i,uniqueAttribute){
                var uAttrib = {title:uniqueAttribute,path:uniqueAttribute, category:"attribute", key:uniqueAttribute,isSchema:true,data_definition_name: data_definition_name,data_definition_id:data_definition_id,position:index,val_position:obj.attrValueColumnPosition};
                node.children.push(uAttrib);
            });
        }
        else{

            node.category = "pivot";
            node.val_position = "";
        }

        nodes.push(node);
    });
    return nodes;
}


function dynaTreeFromXMl(xml)
{
    var leafNodes = {leaves:[{path:'',title:''}],tree:''};
    // var leafNodes = {leaves:[],tree:''}; // contains leaf nodes and xmlDynaTree

    var $root = $(xml).children()[0];

    var rootName = $root.tagName;
    var nodeName =rootName.replace(/ /g,'_');
    var temp=nodeName;
    nodeName =temp.replace(/\./g,'_');
    nodeName =nodeName.replace(/;/g,'_');
    var exactPath = rootName.replace(/ /g,'_');
    // var pathData= "data=tooltip:\""+exactPath+"\"";
    var pathData= 'data="tooltip:\''+exactPath+'\'"';
    leafNodes.tree += '<ul><li class="folder"  id="'+nodeName+'" name="'+nodeName+'" '+pathData+'>'+rootName;

    getLeafNodes($root,nodeName,leafNodes,exactPath);
    leafNodes.tree += '</ul>';

    return leafNodes;
}

function getLeafNodes( node,path,leafNodes,exactPath)
{
    leafNodes.tree += "<ul class='span2' style='float: left;' >";
    if($(node).children().length==0)
    {
        var attr = node.attributes;
        for(var i=0; i<attr.length;i++)
        {
            var nodeName =path.replace(/ /g,'_');
            var temp=nodeName;
            nodeName =temp.replace(/\./g,'_');
            nodeName =nodeName.replace(/;/g,'_');
            //var pathData= "data=tooltip:\""+exactPath+"\"";
            var pathData= 'data="tooltip:\''+exactPath+'\'"';
//            leafNodes.tree += '<li id="'+path+'_'+attr[i].name+'" name="'+path+'_'+attr[i].name+'">'+attr[i].name;
            leafNodes.tree += '<li id="'+nodeName+'__attribz" name="'+nodeName+'__attribz" '+pathData+' >'+attr[i].name;
//            leafNodes.tree += '<li><h4 id="'+path+'__attribz" name="'+path+'__attribz" >'+attr[i].name+'</h4></li>';
        }
        leafNodes.leaves.push({path:path,title:node.tagName});
    }
    $(node).children().each( function(index, child)
    {
        var childName = child.tagName;
        var pNode = path + '_' + childName;
        var pLang = exactPath+ '_' + childName
        var nodeName =pNode.replace(/ /g,'_');
        var temp=nodeName;
        nodeName =temp.replace(/\./g,'_');
        nodeName =nodeName.replace(/;/g,'_');
        //var pathData= "data=tooltip:\""+pLang+"\"";
        var pathData= 'data="tooltip:\''+pLang+'\'"';
        leafNodes.tree += '<li class="folder"  id="'+nodeName+'" '+pathData+' >'+childName;
        getLeafNodes(child,nodeName,leafNodes,pLang);
    });

    leafNodes.tree += "</ul>";

}

var options = {
    checkbox: true,
    selectMode: 3,
    onSelect: function(flag,node) {
        if(flag)
        {
            if(deSelected)
            {
                leafNodes = [];
                paths = [];

                //$('#paths').text('');
                $("#paths").find("tr:gt(0)").remove();
                $('#attributes').html('');
                breadcrum='';
                var selectedNodes = node.tree.getSelectedNodes(true);
                for(var i=0;i<selectedNodes.length;i++)
                {
                    displayChilds(selectedNodes[i]);
                }
            }
            else
            {
                displayChilds(node);
            }
        }
        else
        {
            deSelected = true;
            leafNodes = [];
            paths = [];
            selectedNodes = node.tree.getSelectedNodes(true);
            //$('#paths').text('');
            $("#paths").find("tr:gt(0)").remove();
            $('#attributes').html('');
            breadcrum='';
            for(var i=0;i<selectedNodes.length;i++)
            {
                displayChilds(selectedNodes[i]);
            }
        }



    },
    cookieId: "dynatree-Cb",
    idPrefix: "dynatree-Cb-"
};
function displayChilds(node)
{
    if(node.hasChildren())
    {
        node.visit(function fn(tnode){
            if(!tnode.hasChildren()){
                tnode.makeVisible();
                if(tnode.data.key.indexOf("__attribz") >= 0)
                {
                    $('#attributes').append('<input type="hidden" name="'+tnode.data.key+'['+tnode.data.title+']" value="'+tnode.data.title+'">');
                    var already = false;
                    $.each(paths, function(i,v){
                        if(paths[i] == tnode.data.key )
                        {
                            already=true;
                        }
                    });

                    if(!already)
                    {
                        paths.push(tnode.data.key);

                        leafNodes.push(tnode.data.title);

                        var pathIncludingNode = tnode.data.key.substring(0, tnode.data.key.indexOf("__attribz"));
                        var parent = pathIncludingNode.substring(0, pathIncludingNode.lastIndexOf("_"));

                        var title = pathIncludingNode.substring(pathIncludingNode.lastIndexOf("_")+1);

                        var tempTitle = tnode.data.title;
                        var tempKey = tnode.data.key;
                        tnode.data.key = pathIncludingNode;
                        tnode.data.title = title;
                        var nodeKey = tnode.data.key.replace(/ /g,'_');
                        if(parent == '_2'){
                            parent = tnode.data.title;
                        }
                        else{
                            parent = parent+','+tnode.data.title;
                        }

                        $('#paths tr:first').after('<tr><td  title="'+parent+'" >'+parent+'</td><td title="'+tnode.data.title+'">'+tnode.data.title+'</td>' +
                            '<td><input name="'+nodeKey+'_alias" id="'+nodeKey+'_alias" class="input-small" type="text" value="'+tnode.data.title+'" placeholder="Alias..."/><input name="'+nodeKey+'_path" id="'+nodeKey+'_path" type="hidden" value="'+tnode.data.tooltip+'"/></td><td>' +
                            '<select  class="input-small" name="'+nodeKey+'_type" id="'+nodeKey+'_type" >' +
                            '<option value="text">Text</option><option value="numeric">Numeric</option><option value="datetime">DateTime</option><option value="lat">Lat</option><option value="long">Long</option><option value="categorical">Categorical</option><option value="word">Word</option></select></td>' +
                            '<td><input type="checkbox" name="'+nodeKey+'_index" id="'+nodeKey+'_index" value="'+tnode.data.title+'" /></td></tr>');
                        paths.push(tnode.data.key);
                        leafNodes.push(tnode.data.title);
                        tnode.data.key = tempKey;
                        tnode.data.title = tempTitle;
                    }

                }
                else
                {


                    // leafNodes.push(tnode.data.title);

                    var parent = tnode.getParent().data.key;
                    if(parent == '_2'){
                        parent = tnode.data.title;
                    }
                    else{
                        parent = parent+','+tnode.data.title;
                    }

                    if(streamType =='csv')
                    {
                        parent = tnode.data.key;
                    }

                    var nodeKey = tnode.data.key.replace(/ /g,'_');
                    $('#paths tr:first').after('<tr><td  title="'+parent+'" >'+parent+'</td><td title="'+tnode.data.title+'">'+tnode.data.title+'</td>' +
                        '<td><input name="'+nodeKey+'_alias" id="'+nodeKey+'_alias" class="input-small" type="text" value="'+tnode.data.title+'" placeholder="Alias..."/><input name="'+nodeKey+'_path" id="'+nodeKey+'_path" type="hidden" value="'+tnode.data.tooltip+'"/></td><td>' +
                        '<select  class="input-small" name="'+nodeKey+'_type" id="'+nodeKey+'_type" >' +
                        '<option value="text">Text</option><option value="numeric">Numeric</option><option value="datetime">DateTime</option><option value="lat">Lat</option><option value="long">Long</option><option value="categorical">Categorical</option><option value="word">Word</option></select></td>' +
                        '<td><input type="checkbox" name="'+nodeKey+'_index" id="'+nodeKey+'_index" value="'+tnode.data.title+'" /></td></tr>');
                    //   paths.push(tnode.data.key);

                    var already = false;
                    $.each(paths, function(i,v){

                        if(paths[i] == tnode.data.key )
                        {
                            already=true;
                        }
                    });

                    if(!already)
                    {
                        paths.push(tnode.data.key);

                        leafNodes.push(tnode.data.title);    }

                }

            }
        },true);
    }
    else
    {

        if (node.data.key.indexOf("__attribz") >= 0)
        {
            $('#attributes').append('<input type="hidden" name="'+node.data.key+'['+node.data.title+']" value="'+node.data.title+'">');

            var already = false;
            $.each(paths, function(i,v){

                if(paths[i] == node.data.key )
                {
                    already=true;
                }
            });

            if(!already)
            {
                paths.push(node.data.key);

                leafNodes.push(node.data.title);
                var pathIncludingNode = node.data.key.substring(0, node.data.key.indexOf("__attribz"));
                var parent = pathIncludingNode.substring(0, pathIncludingNode.lastIndexOf("_"));
                if(parent == '_2'){
                    parent = node.data.title;
                }
                else{
                    parent = parent+','+node.data.title;
                }
                var title = pathIncludingNode.substring(pathIncludingNode.lastIndexOf("_")+1);
                var tempKey = node.data.key;
                var tempTitle = node.data.title;
                node.data.key = pathIncludingNode;
                node.data.title = title;
                var nodeKey = node.data.key.replace(/ /g,'_');
                $('#paths tr:first').after('<tr><td  title="'+parent+'" >'+parent+'</td><td title="'+node.data.title+'">'+node.data.title+'</td>' +
                    '<td><input name="'+nodeKey+'_alias" id="'+nodeKey+'_alias" class="input-small" type="text" value="'+node.data.title+'" placeholder="Alias..."/><input name="'+nodeKey+'_path" id="'+nodeKey+'_path" type="hidden" value="'+node.data.tooltip+'"/></td><td>' +
                    '<select  class="input-small" name="'+nodeKey+'_type" id="'+nodeKey+'_type" >' +
                    '<option value="text">Text</option><option value="numeric">Numeric</option><option value="datetime">DateTime</option><option value="lat">Lat</option><option value="long">Long</option><option value="categorical">Categorical</option><option value="word">Word</option></select></td>' +
                    '</td><td><input type="checkbox" name="'+nodeKey+'_index" id="'+nodeKey+'_index" value="'+node.data.title+'" /></td></tr>');
                paths.push(node.data.key);
                leafNodes.push(node.data.title);
                node.data.key = tempKey;
                node.data.title = tempTitle;
            }

        }
        else
        {
            // leafNodes.push(node.data.title);
            var nodeKey = node.data.key.replace(/ /g,'_');
            var parent = node.getParent().data.key;
            if(parent == '_2'){
                parent = node.data.title;
            }
            else{
                parent = parent+','+node.data.title;
            }
            if(streamType =='csv')
            {
                parent = node.data.key;
            }

            $('#paths tr:first').after('<tr><td  title="'+parent+'" >'+parent+'</td><td title="'+node.data.title+'">'+node.data.title+'</td>' +
                '<td><input name="'+nodeKey+'_alias" id="'+nodeKey+'_alias" class="input-small" type="text" value="'+node.data.title+'" placeholder="Alias..."/><input name="'+nodeKey+'_path" id="'+nodeKey+'_path" type="hidden" value="'+node.data.tooltip+'"/></td><td>' +
                '<select  class="input-small" name="'+nodeKey+'_type" id="'+nodeKey+'_type" >' +
                '<option value="text">Text</option><option value="numeric">Numeric</option><option value="datetime">DateTime</option><option value="lat">Lat</option><option value="long">Long</option><option value="categorical">Categorical</option><option value="word">Word</option></select></td>' +
                // tags
                '<td><input type="checkbox" name="'+nodeKey+'_index" id="'+nodeKey+'_index" value="'+node.data.title+'" /></td></tr>');
            //   paths.push(node.data.key);
            var already = false;
            $.each(paths, function(i,v){
                if(paths[i] == node.data.key )
                {
                    already=true;
                }
            });
            if(!already)
            {
                paths.push(node.data.key);
                leafNodes.push(node.data.title); }
        }
    }
    var setOption = '';
    for(var i=0;i<tagsArray.length;i++){
        setOption += '<option value="'+tagsArray[i]._id+'">'+tagsArray[i].name+'</option>';
    }
    $(".list-tag").html(setOption);
    $(".list-tag").multiselect({  });
}

function generateDataList(leafNodes,paths){
    $("#datalistAddLoader").show();
    var datalistname = $('#datalistname').val();
    var streamtags = $('#main-tags').val();
    if(datalistname ==''){
        $("#datalistAddLoader").hide();
        //$('#messageBox').html('<div class="alert alert-error"><button class="close" data-dismiss="alert" type="button">×</button><strong>Error!</strong> Enter data list name.</div>');
        utils.displayAlert("Enter data list name.","error");
        $("#datalistname").css("border-color","#E9322D");
        $("#datalistname").css("box-shadow","0 0 6px #F8B9B7");
        //return false;
    }
    else{
        /*if(streamtags === null){
         $("#datalistAddLoader").hide();
         $('#messageBox').html('<div class="alert alert-error"><button class="close" data-dismiss="alert" type="button">×</button><strong>Error!</strong> Please select tags.</div>');
         utils.displayAlert("Please select tags.","error");
         return false;
         }else{*/
        var selectedFields = [];
        if($("#paths input[type='checkbox']").length > 0){
            var datalist = '';
            var nodeAttributes = [];
            $.each(paths,function(index, value){
                if(value.indexOf("__attribz") >=0)
                {
                    var path = value;
                    var attr = [];
                    $(":hidden[name^='"+value+"']").each(function (){
                        attr.push($(this).val());
                    });
                    nodeAttributes.push({path:path,attributes:attr});
                }
                var leaf = leafNodes[index];
                var typeId = '#'+value.replace(/ /g, '_')+'_type';
                var type = $(typeId + ' option:selected').val();
                var tagID = '#'+value.replace(/ /g, '_')+'_tag';
                /* var tagVal =  $(tagID).val();
                 if(tagVal){
                 tagVal=tagVal.toString();
                 tagVal =  tagVal.replace(/,/g, '~');
                 }else{*/
                var tagVal = 'NA';
//                }
                if($(typeId).is(':checked'))
                {
                    type = 'yes';
                }
                var indexId = '#'+value.replace(/ /g, '_')+'_index';
                var ind = 'no';
                if($(indexId).is(':checked'))
                {
                    ind = 'yes';
                }
                var aliasId = '#'+value.replace(/ /g, '_')+'_alias';
                var alias = $(aliasId).val();
                var pathId = '#'+value.replace(/ /g, '_')+'_path';
                var path = $(pathId).val();
                var dl = leaf + '-' + alias + '-' + type + '-' + ind +'-'+ tagVal+ ';' + path + ',';
                datalist += dl;
                selectedFields.push(leaf);
            });

            var positions = [];

            if(typeof keysArray[0] != 'undefined'){
                $.each(selectedFields,function(index,value){
                    $.each(keysArray,function(i,v){
                        if(value == v){
                            positions.push({column:v,position:i});
                        }
                    });
                });
            }
            datalist   = datalist.slice(0,-1);
            if(streamtags != null){
                streamtags = streamtags.toString();
                streamtags = streamtags.replace(/,/g, '~');
            }

//            var delimiter = (typeof $('#delim').val() ==='undefined')?'':$('#delim').val();
            return  {structure:datalist,attributes:nodeAttributes,pivots:pivotPoints,attribValues:attribValues};
            /*$.ajax({
             url : "/streams/add",
             type: 'POST',
             data: {name:datalistname,positions:positions,delimiter:delimiter,stream_type:streamType,structure:datalist,structure_name:streamName, structure_id:streamId,attributes:nodeAttributes,streamTag:streamtags,attributes:nodeAttributes,pivots:pivotPoints,attribValues:attribValues},
             success:function(data)
             {
             //$('#messageBox').html('<div class="alert alert-success"><button class="close" data-dismiss="alert" type="button">×</button><strong>Success!&nbsp;&nbsp;</strong>Data list created successfully</div>');
             utils.displayAlert("Data list created successfully.","success");
             $("#datalistAddLoader").hide();
             //$("#pathsDiv").empty();
             //utils.loadDataDefinition(data._id);
             if(data.status == true){

             data_definition = data.stream;

             bootbox.confirm("Do you want to select date time field?", function(confirmed) {


             if(confirmed){

             $('#data_list_id').val(data._id);
             $('#fields12').html('');
             $('#fields12').html('<option value="na">Select Field</option>');

             $.each(data_definition.structure, function(index,field){
             if(field.category == "pivot" && streamType == "unstructured")
             $('#fields12').append('<option data-position="'+field.position+'" value="'+field.name+'">'+field.name+'</option>');
             else if(streamType != "unstructured")
             $('#fields12').append('<option value="'+field.name+'">'+field.name+'</option>');

             });

             $('#predefinedFormats').html('');
             $('#predefinedFormats').html('<option value="na">Select Format</option>');

             $.ajax({
             url:'/streams/getTimeFormats',
             async:false,
             success: function(data){

             if(typeof data['doc'] !== 'undefined'){

             var formates = data['doc'];

             $.each(formates, function(index,record){
             $('#predefinedFormats').append('<option value="'+record.format+'">'+record.format+'</option>');
             });
             }
             $('#dataDefinitionModel').modal({
             show : true,
             backdrop : 'static'
             });
             }
             });

             }
             else{

             $('#datalistname,#saveDD,#cancel').hide();
             $('#accordianGroup2,#finish').show();
             $('#collapseOne').removeClass('in');
             $('#collapseTwo').addClass('in');

             $('#dlTitle').append(' | ' + data_definition.name);
             var dataListId = data_definition._id;
             $.ajax({
             url:'/kpis/findByDataListId/'+dataListId,
             async: false,
             success: function(data){
             if(typeof data['doc']!== 'undefined'){

             $.each(data['doc'],function(index,kpi){
             $('#kpis').append('<option value="'+kpi._id+'">'+kpi.name+'</option>');
             });
             $('#kpis').multiselect({
             noneSelectedText: 'Select Kpis',
             uncheckAllText : 'Uncheck All'
             });
             }

             }
             });

             $.ajax({
             url: "/streams/findById/"+dataListId,
             async: false,
             success: function(data){
             $("#counterData1").html('');
             $("#nodesView1").html('');
             var dataList = data['doc'][0];
             var structure = dataList.structure;
             var counterShowHtml = '';
             for (var i = 0; i < structure.length; i++) {
             var pathId = structure[i].path.replace(/\./g,'_');
             pathId = pathId.replace(/ /g,'_');
             counterShowHtml +='<div style="clear: both;"><input type="checkbox" id="'+pathId+'" value="'+structure[i].name+'" onclick = "showSelectedData( \''+pathId+'\' ,\''+structure[i].name+'\',this);">&nbsp;&nbsp;'+structure[i].name+'</div>';
             }
             $("#nodesView1").html(counterShowHtml);
             }
             });

             }
             });
             }
             }
             });*/

        }else{
            $("#datalistAddLoader").hide();
            //$('#messageBox').html('<div class="alert alert-error"><button class="close" data-dismiss="alert" type="button">×</button><strong>Error!</strong> Please select at lease one from tree.</div>');
            utils.displayAlert("Please select at lease one from tree.","error");
            // return false;
        }
    }
    //}


}



function updateDataList(leafNodes,paths){


    $("#datalistAddLoader").show();
    var datalistname = $('#datalistname').val();
    var datalistid = $('#update_data_list_id').val();
    data_definition.name = datalistname;
    data_definition._id = datalistid;
    bootbox.confirm("Do you want to select date time field?", function(confirmed) {
        if(confirmed){
            $('#data_list_id').val(datalistid);
            $('#fields12').html('');
            $('#fields12').html('<option value="na">Select Field</option>');

            $.each(data_definition.structure, function(index,field){
                if(field.category == "pivot" && streamType == "unstructured")
                    $('#fields12').append('<option data-position="'+field.position+'" value="'+field.name+'">'+field.name+'</option>');
                else if(streamType != "unstructured")
                    $('#fields12').append('<option value="'+field.name+'">'+field.name+'</option>');

            });

            $('#predefinedFormats').html('');
            $('#predefinedFormats').html('<option value="na">Select Format</option>');

            $.ajax({
                url:Constants.URL_PREFIX+'/streams/getTimeFormats',
                type:'GET',
                /*async:false,*/
                success: function(data){

                    if(typeof data['doc'] !== 'undefined'){

                        var formates = data['doc'];

                        $.each(formates, function(index,record){
                            $('#predefinedFormats').append('<option value="'+record.format+'">'+record.format+'</option>');
                        });
                    }
                    $('#dataDefinitionModel').modal({
                        show : true,
                        backdrop : 'static'
                    });
                }
            });

        }
        else{


            $.ajax({
                url:Constants.URL_PREFIX+'/kpis?stream_id='+datalistid,
                /*async: false,*/
                type: 'GET',
                success: function(data){
                    if(typeof data['doc']!== 'undefined'){

                        $.each(data['doc'],function(index,kpi){
                            $('#kpis').append('<option value="'+kpi._id+'">'+kpi.name+'</option>');
                        });
                        $('#kpis').multiselect({
                            noneSelectedText: 'Select Kpis',
                            uncheckAllText : 'Uncheck All'
                        });
                    }

                }
            });
            $('#datalistname,#saveDD,#cancel').hide();
            $('#accordianGroup2,#finish').show();
            $('#collapseOne').removeClass('in');
            $('#collapseTwo').addClass('in');

            $('#dlTitle').append(' | ' + datalistname);

            $.ajax({
                url:Constants.URL_PREFIX+'/kpis?stream_id='+datalistid,
                /*async: false,*/
                type: 'GET',
                success: function(data){
                    if(typeof data['doc']!== 'undefined'){

                        $.each(data['doc'],function(index,kpi){
                            $('#kpis').append('<option value="'+kpi._id+'">'+kpi.name+'</option>');
                        });
                        $('#kpis').multiselect({
                            noneSelectedText: 'Select Kpis',
                            uncheckAllText : 'Uncheck All'
                        });
                    }

                }
            });

            $.ajax({
                url: Constants.URL_PREFIX+"/streams?id="+datalistid,
                /*async: false,*/
                type: 'GET',
                success: function(data){
                    $("#counterData1").html('');
                    $("#nodesView1").html('');
                    var dataList = data['doc'][0];
                    var structure = dataList.structure;
                    var counterShowHtml = '';
                    for (var i = 0; i < structure.length; i++) {
                        var pathId = structure[i].path.replace(/\./g,'_');
                        pathId = pathId.replace(/ /g,'_');
                        counterShowHtml +='<div style="clear: both;"><input type="checkbox" id="'+pathId+'" value="'+structure[i].name+'" onclick = "showSelectedData( \''+pathId+'\' ,\''+structure[i].name+'\',this);">&nbsp;&nbsp;'+structure[i].name+'</div>';
                    }
                    $("#nodesView1").html(counterShowHtml);
                }
            });
            $.ajax({
                url:'/app/findByDataListId/'+datalistid,
                /*async: false,*/
                success: function(appData){
                    if(typeof appData['doc']!= 'undefined'){
                        var appRecord = appData['doc'][0];
                        _.defer(function(){
                            appModel = new AppModel();
                            appModel.set({ _id:appRecord._id,
                                name:appRecord.name,
                                data_stream_id:appRecord.data_stream_id,
                                data_stream_name:appRecord.data_stream_id,
                                data_definition_id:appRecord.data_definition_id,
                                data_definition_name:appRecord.data_definition_name,
                                stream_tags:appRecord.stream_tags,
                                fields_tags:appRecord.fields_tags,
                                kpis:appRecord.kpis,
                                aggregations:appRecord.aggregations,
                                notifications:appRecord.notifications,
                                algorithms:appRecord.algorithms,
                                jobs:appRecord.jobs,
                                workflows:appRecord.workflows,
                                collection_id:appRecord.collection_id,
                                collection_name:appRecord.collection_name});
                            editAppModule(appRecord);
                        });

                    }

                }
            });

        }
    });

}
function editAppModule(appData){
    var dataListId = appData.data_stream_id;
    $("#kpisList tbody").html('');
    $("#aggregationsList tbody").html('');
    $("#algorithmsList tbody").html('');
    $("#notificationsList tbody").html('');
    $("#jobsList tbody").html('');
    $("#workflowList tbody").html('');
    if(typeof appData.kpis !='undefined'){
        var kpis = appData.kpis;
        for(var i=0;i<kpis.length;i++){
            var kpiID = kpis[i];
            $.ajax({
                url: Constants.URL_PREFIX+"/kpis?id="+kpiID,
                /*async: false,*/
                type: 'GET',
                success: function(data){
                    if(typeof data['doc'] !='undefined'){
                        var kpiData = data['doc'][0];
                        var kpiNameWOS = utils.trimWhiteSpaces(kpiData.name);
                        var kpieditLink = "editKpis('"+kpiData._id+"');";
                        /*$('#kpisList').append ( '<div class="btn-group" id="'+kpiData._id+'Kpi">'+
                         '<a class="btn " href="javascript:" data-title="<h5>KPI Details</h5>" id="'+kpiNameWOS+'kpi">'+kpiData.name+'</a>'+
                         '<a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>'+
                         '<ul class="my-dropdown-menu">'+
                         '<li><a href="javascript:" class="delete" data-type="kpi" data-name="'+kpiData.name+'" id="'+kpiData._id+'"><i class="icon-trash"></i> Delete</a></li>'+
                         '<li><a href="javascript:" class="edit" onclick="'+kpieditLink+'"><i class="icon-edit"></i> Edit</a></li>'+
                         '</ul>'+
                         '</div>');*/
                        var countersArray = [];
                        var countersArrayPop = '';
                        var countersArrayTrim = '';

                        $.each(kpiData.counters,function(index,counter){
                            countersArray.push(counter.name);

                        });

                        for (var n=0;n<countersArray.length;n++){
                            if (n < 1){
                                countersArrayTrim +=  countersArray[n];
                            }
                            countersArrayPop += countersArray[n]+"<br />";
                        }
                        if (countersArray.length > 1){
                            countersArrayTrim =  countersArrayTrim.slice(0,-1);
                            countersArrayTrim += '...<a href="javascript:" class="counter-popover" style="font-size: 11px;" rel="popover" data-content="'+countersArrayPop+'" data-original-title="Counters">more</a>';
                        }

                        var details = '<tr id="'+kpiData._id+'Kpi"><td>'+kpiData.name+'</td><td>'+appData.data_stream_name+'</td><td>'+kpiData.formula+'</td><td>'+kpiData.alias+'</td><td>'+countersArrayTrim+'</td>' +
                            '<td><div class="btn-group">' +
                            '<a class="btn" data-toggle="dropdown" href="#"><i class="icon-arrow-down"></i> Select</a>' +
                            '<a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>' +
                            '<ul class="dropdown-menu">' +
                            '<li><a href="javascript:" class="delete" data-type="kpi" data-name="'+kpiData.name+'" id="'+kpiData._id+'"><i class="icon-trash"></i> Delete</a></li>'+
                            '<li><a href="javascript:" class="edit" onclick="'+kpieditLink+'"><i class="icon-edit"></i> Edit</a></li>'+
                            '</ul></div></td>'+
                            '</tr>';
                        $('#kpisList tbody').append(details);
                        $('.counter-popover').popover();
                        /*$('#'+kpiNameWOS+'kpi').popover({
                         content : details
                         });*/
                    }
                }
            });
        }
    }

    if(typeof appData.aggregations !='undefined'){
        var aggregations = appData.aggregations;
        for(var i=0;i<aggregations.length;i++){
            var aggregationsID = aggregations[i];
            $.ajax({
                url: Constants.URL_PREFIX+"/aggregation?id="+aggregationsID,
                /*async: false,*/
                type: 'GET',
                success: function(data){
                    if(typeof data['doc'] !='undefined'){
                        var aggregation = data['doc'][0];
                        var aggNameWOS = utils.trimWhiteSpaces(aggregation.name);
                        var aggEditLink = "editAggregation('"+aggregation._id+"');";
                        /* $('#aggregationsList').append ( '<div class="btn-group" id="'+aggregation._id+'Agg">'+
                         '<a class="btn " href="javascript:" data-title="<h5>Aggregation Details</h5>" id="'+aggNameWOS+'agg">'+aggregation.name+'</a>'+
                         '<a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>'+
                         '<ul class="my-dropdown-menu">'+
                         '<li><a href="javascript:" class="delete" data-type="aggregation" id="'+aggregation._id+'"><i class="icon-trash"></i> Delete</a></li>'+
                         '<li><a href="javascript:" class="edit"  onclick="'+aggEditLink+'"><i class="icon-edit"></i> Edit</a></li>'+
                         '</ul>'+
                         '</div>');*/

                        var aggregatedField = '';
                        var referenceField = '';
                        var referenceFieldTrim = '';
                        if(typeof aggregation.aggregate_field != 'undefined'){
                            aggregatedField = aggregation.aggregate_field[0].field_name;
                        }
                        if(typeof aggregation.reference_fields != 'undefined'){
                            var fields = aggregation.reference_fields;
                            for(var i=0;i<fields.length;i++){
                                if (i < 1){
                                    referenceFieldTrim += fields[i].field_name;
                                }
                                referenceField += fields[i].field_name+'<br />';
                            }

                            if (fields.length > 1){
                                referenceFieldTrim += '...<a href="javascript:" class="reference-field-popover" style="font-size: 11px;" rel="popover" data-content="'+referenceField+'" data-original-title="Reference Field">more</a>';
                            }
                            //referenceField = referenceField.slice(0,-1);
                        }




                        var details = '<tr id="'+aggregation._id+'Agg"><td>'+aggregation.name+'</td><td>'+appData.collection_name+'</td><td>'+appData.data_stream_name+'</td><td>'+referenceFieldTrim+'</td><td>'+aggregatedField+'</td>' +
                            '<td><div class="btn-group">' +
                            '<a class="btn" data-toggle="dropdown" href="#"><i class="icon-arrow-down"></i> Select</a>' +
                            '<a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>' +
                            '<ul class="dropdown-menu">' +
                            '<li><a href="javascript:" class="delete" data-type="aggregation" id="'+aggregation._id+'"><i class="icon-trash"></i> Delete</a></li>'+
                            '<li><a href="javascript:" class="edit"  onclick="'+aggEditLink+'"><i class="icon-edit"></i> Edit</a></li>'+
                            '</ul></div></td>'+
                            '</tr>';
                        $('#aggregationsList tbody').append (details);
                        $('.reference-field-popover').popover();
                        /*$('#'+aggNameWOS+'agg').popover({
                         content : details
                         });*/

                    }
                }
            });
        }
    }
    if(typeof appData.algorithms !='undefined'){
        var algos = appData.algorithms;
        for(var i=0;i<algos.length;i++){
            var algoID = algos[i];
            $.ajax({
                url: Constants.URL_PREFIX+"/algorithm?id="+algoID,
                /*async: false,*/
                type: 'GET',
                success: function(data){
                    if(typeof data['doc'] !='undefined'){
                        var algorithm = data['doc'][0];
                        var algoNameWOS = utils.trimWhiteSpaces(algorithm.name);
                        /*$('#algorithmsList').append ( '<div class="btn-group" id="'+algorithm._id+'Algorithm">'+
                         '<a class="btn " href="javascript:" data-title="<h5>Algorithms Details</h5>" id="'+algoNameWOS+'algorithm">'+algorithm.name+'</a>'+
                         '<a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>'+
                         '<ul class="my-dropdown-menu">'+
                         '<li><a href="javascript:" class="delete" data-type="algorithm" id="'+algorithm._id+'"><i class="icon-trash"></i> Delete</a></li>'+
                         '</ul>'+
                         '</div>');*/
                        var details = '<tr id="'+algorithm._id+'Algorithm"><td>'+algorithm.name+'</td><td>'+algorithm.algo_type+'</td><td>'+algorithm.algo_name+'</td>' +
                            '<td><div class="btn-group">' +
                            '<a class="btn" data-toggle="dropdown" href="#"><i class="icon-arrow-down"></i> Select</a>' +
                            '<a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>' +
                            '<ul class="dropdown-menu">' +
                            '<li><a href="javascript:" class="delete" data-type="algorithm" id="'+algorithm._id+'"><i class="icon-trash"></i> Delete</a></li>'+
                            '</ul></div></td>'+
                            '</tr>';
                        $('#algorithmsList tbody').append (details);
                        /*$('#'+algoNameWOS+'algorithm').popover({
                         content : details
                         });*/

                    }
                }
            });
        }
    }
    if(typeof appData.workflows !='undefined'){
        var workflows = appData.workflows;
        for(var i=0;i<workflows.length;i++){
            var workflowID = workflows[i];
            $.ajax({
                url: Constants.URL_PREFIX+"/workflows?id="+workflowID,
                type: 'GET',
                /*async: false,*/
                success: function(data){
                    if(typeof data['doc'] !='undefined'){
                        var workflow = data['doc'][0];
                        var wfNameWOS = utils.trimWhiteSpaces(workflow.name);
                        var jobStepsArray = [];
                        var twoJobStepsArray = '';
                        var jobStepsArrayPop = [];
                        $.each(workflow.job_steps,function(index,jobStep){
                            jobStepsArrayPop.push(jobStep.job_name+"<br />");
                            jobStepsArray.push(jobStep.job_name);
                        });

                        for(k=0;k<jobStepsArray.length;k++){
                            if (k<1){
                                twoJobStepsArray += jobStepsArray[k]+',';
                            }
                        }
                        if(jobStepsArray.length>1){
                            twoJobStepsArray = twoJobStepsArray.slice(0,-1);
                            twoJobStepsArray += '...<a href="javascript:" class="jobSteps-popover" style="font-size: 11px;" rel="popover" data-content="'+jobStepsArrayPop+'" data-original-title="Job Steps">more</a>';
                        }else{
                            twoJobStepsArray = twoJobStepsArray.slice(0,-1);
                        }

                        var wflowEditLink = "editWorkflow('"+workflow._id+"','"+appData.data_stream_id+"');";
                        /*$('#workflowList').append ( '<div class="btn-group" id="'+workflow._id+'Workflow">'+
                         '<a class="btn " href="javascript:" data-title="<h5>Workflow Details</h5>" id="'+wfNameWOS+'workflow">'+workflow.name+'</a>'+
                         '<a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>'+
                         '<ul class="my-dropdown-menu">'+
                         '<li><a href="javascript:" class="delete" data-type="workflow" id="'+workflow._id+'"><i class="icon-trash"></i> Delete</a></li>'+
                         '<li><a href="javascript:" class="edit" onclick="'+wflowEditLink+'"><i class="icon-edit"></i> Edit</a></li>'+
                         '</ul>'+
                         '</div>');*/

//                        var details = '<tr id="'+workflow._id+'Workflow"><td>'+workflow.name+'</td><td>'+workflow.priority+'</td><td>'+workflow.is_active+'</td><td>'+workflow.start_date+'</td><td>'+workflow.end_date+'</td><td>'+workflow.recurrence+'</td><td>'+twoJobStepsArray+'</td>' +
                        var details = '<tr id="'+workflow._id+'Workflow"><td>'+workflow.name+'</td><td>'+workflow.start_date+'</td><td>'+workflow.end_date+'</td><td>'+workflow.recurrence+'</td><td>'+twoJobStepsArray+'</td>' +
                            '<td><div class="btn-group">' +
                            '<a class="btn" data-toggle="dropdown" href="#"><i class="icon-arrow-down"></i> Select</a>' +
                            '<a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>' +
                            '<ul class="dropdown-menu">' +
                            '<li><a href="javascript:" class="delete" data-type="workflow" id="'+workflow._id+'"><i class="icon-trash"></i> Delete</a></li>'+
                            '<li><a href="javascript:" class="edit" onclick="'+wflowEditLink+'"><i class="icon-edit"></i> Edit</a></li>'+
                            '</ul></div></td>'+
                            '</tr>';
                        $('#workflowList tbody').append (details);
                        $('.jobSteps-popover').popover();
                        /*$('#'+wfNameWOS+'workflow').popover({
                         content : details
                         });*/

                    }
                }
            });
        }
    }
    if(typeof appData.notifications !='undefined'){
        var notifications = appData.notifications;
        for(var i=0;i<notifications.length;i++){
            var notificationID = notifications[i];
            $.ajax({
                url: Constants.URL_PREFIX+"/alerts?id="+notificationID,
                type: 'GET',
                /*async: false,*/
                success: function(data){
                    if(typeof data['doc'] !='undefined'){
                        var notification = data['doc'][0];
                        var notificationNameWOS = utils.trimWhiteSpaces(notification.name);
                        var editNotLink = "editNotification('"+notification._id+"');";
                        /*$('#notificationsList').append ( '<div class="btn-group" id="'+notification._id+'Notification">'+
                         '<a class="btn " href="javascript:" data-title="<h5>Notifications Details</h5>" id="'+notificationNameWOS+'notification">'+notification.name+'</a>'+
                         '<a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>'+
                         '<ul class="my-dropdown-menu">'+
                         '<li><a href="javascript:" class="delete" data-type="notification" id="'+notification._id+'"><i class="icon-trash"></i> Delete</a></li>'+
                         '<li><a href="javascript:" class="edit" onclick="'+editNotLink+'"><i class="icon-edit"></i> Edit</a></li>'+
                         '</ul>'+
                         '</div>');*/
                        var details = '<tr id="'+notification._id+'Notification"><td>'+notification.name+'</td><td>'+appData.collection_name+'</td><td>'+appData.data_stream_name+'</td>' +
                            '<td><div class="btn-group">' +
                            '<a class="btn" data-toggle="dropdown" href="#"><i class="icon-arrow-down"></i> Select</a>' +
                            '<a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>' +
                            '<ul class="dropdown-menu">' +
                            '<li><a href="javascript:" class="delete" data-type="notification" id="'+notification._id+'"><i class="icon-trash"></i> Delete</a></li>'+
                            '<li><a href="javascript:" class="edit" onclick="'+editNotLink+'"><i class="icon-edit"></i> Edit</a></li>'+
                            '</ul></div></td>'+
                            '</tr>';
                        $('#notificationsList tbody').append (details);
                        /*$('#'+notificationNameWOS+'notification').popover({
                         content : details
                         });*/
                    }
                }
            });
        }
    }
    if(typeof appData.jobs !='undefined'){
        var jobs = appData.jobs;
        for(var i=0;i<jobs.length;i++){
            var jobID = jobs[i];
            $.ajax({
                url: Constants.URL_PREFIX+"/jobs?id="+jobID,
                /*async: false,*/
                success: function(data){
                    if(typeof data['doc'] !='undefined'){
                        var job = data['doc'][0];
                        var jobNameWOS = utils.trimWhiteSpaces(job.name);
                        var editLink = "editActivity('"+job._id+"')";
                        var details = '<tr id="'+job._id+'Job"><td>'+job.name+'</td><td>'+job.stream_level+'</td><td>'+job.type+'</td><td>'+appData.collection_name+'</td><td>'+appData.data_stream_name+'</td>' +
                            '<td><div class="btn-group">' +
                            '<a class="btn" data-toggle="dropdown" href="#"><i class="icon-arrow-down"></i> Select</a>' +
                            '<a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>' +
                            '<ul class="dropdown-menu">' +
                            '<li><a href="javascript:" class="edit" data-type="job" id="'+job._id+'" onclick="'+editLink+'"><i class="icon-edit"></i> Edit</a></li>'+
                            '<li><a href="javascript:" class="delete" data-type="job" id="'+job._id+'"><i class="icon-trash"></i> Delete</a></li>'+
                            '</ul></div></td>'+
                            '</tr>';
                        $('#jobsList tbody').append (details);
                        /*$('#'+jobNameWOS+'job').popover({
                         content : details
                         });*/
                    }
                }
            });
        }
    }

    if(typeof appData.fields_tags !='undefined'){
        var fields_tags = appData.fields_tags;
        for(var i=0;i<fields_tags.length;i++){
            var field = fields_tags[i].field;
            var tags  = fields_tags[i].tags;
            var idForTags = utils.removeSpecialCharactors(field+'tags');
            $('<tr><td>'+field+'</td><td id="'+idForTags+'"></td></tr>').insertAfter('#dlFieldTagsList');
            for(var j=0;j<tags.length;j++){
                $.ajax({
                    url: Constants.URL_PREFIX+"/tags?id=" +tags[j],
                    type: 'GET',
                    /*async:false,*/
                    success: function(data){
                        if(typeof data['doc'] !== 'undefined'){
                            var tag = data['doc'][0];
                            var streamTagWOS = utils.trimWhiteSpaces(tag.name);
                            //$('#'+idForTags).append ( '<div class="btn-group" id="'+tag._id+utils.trimWhiteSpaces(field)+'FieldTag">'+
                            $('#'+idForTags).append ( '<div class="btn-group" id="'+tag._id+utils.removeSpecialCharactors(field)+'FieldTag">'+
                                '<a class="btn " href="javascript:" data-title="<h5>Tag Details</h5>" id="'+streamTagWOS+'fieldTag">'+tag.name+'</a>'+
                                '<a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>'+
                                '<ul class="dropdown-menu">'+
                                '<li><a href="javascript:" class="delete" data-field="'+field+'" data-type="fieldLevelTag" id="'+tag._id+'"><i class="icon-trash"></i> Delete</a></li>'+
                                '</ul>'+
                                '</div>');

                            var details = '<table class="table table-bordered" style="word-wrap: break-word">' +
                                '<tr><th>Name</th><td>'+tag.name+'</td></tr>' +
                                '<tr><th>Type</th><td>'+tag.type+'</td></tr>' +
                                '<tr><th>Tag Group</th><td>'+tag.taggroup+'</td></tr>' +
                                '<tr><th>Time Dimension</th><td>'+tag.time_dimension+'</td></tr>' +
                                '</table>';

                            $('#'+streamTagWOS+'fieldTag').popover({
                                content : details
                            });
                        }
                    }
                });
            }
        }
        $("#fieldTagsTable").append('<tr><td></td><td ></td></tr>');
    }

}

function pass1(data){

    unstructured_data = data;
    var allLines = data.split('\n');
    var firstLine = allLines[0];
    var columns = firstLine.split(',');
    return columns;
}

function dynaTreeFromJSON(obj,dynaObj,path,schemaInfo){

    for(var key in obj){
        if(typeof obj[key] == "object" ){
            if (obj[key] instanceof Array ) {

                var path1 = path+"."+key;
                if(path1[0] == "."){
                    path1 = path1.substr(1);
                }
                dynaObj.children.push( dynaTreeFromJSON(obj[key][0],{title:key, children:[],alias:key,index:'true', path:path1.split('.'), isFolder:'true', key:schemaInfo.data_definition_id+path+key,dataType:"text",isSchema:true,data_definition_id:schemaInfo.data_definition_id,data_definition_name:schemaInfo.data_definition_name,val_position:"",category:"",position:"",is_mapped:"false",mapped_from:""},path1,schemaInfo) );
            }
            else{

                var path1 = path+"."+key;
                if(path1[0] == "."){
                    path1 = path1.substr(1);
                }
                dynaObj.children.push( dynaTreeFromJSON(obj[key] ,{title:key, children:[], alias:key,index:'true',path:path1.split('.'), isFolder:'true', key:schemaInfo.data_definition_id+path+key,dataType:"text",isSchema:true,data_definition_id:schemaInfo.data_definition_id,data_definition_name:schemaInfo.data_definition_name,val_position:"",category:"",position:"",is_mapped:"false",mapped_from:""},path1,schemaInfo ) );
            }

        }else{

            var path1 = path+"."+key;
            if(path1[0] == "."){
                path1 = path1.substr(1);
            }
            dynaObj.children.push({title:key, alias:key,index:'true', path:path1.split('.'), isFolder:'true', key:schemaInfo.data_definition_id+path+key,dataType:"text",children:[], isSchema:true,data_definition_id:schemaInfo.data_definition_id,data_definition_name:schemaInfo.data_definition_name,val_position:"",category:"",position:"",is_mapped:"false",mapped_from:""});
        }
    }
    return dynaObj;
}
var doc='';
function jsonToXml(json){
    doc='';
    var end = '</' + json.title + '>';
    var start = '<' + json.title + '>';
    var stack = new Array();
    stack.push(end);
    doc+=start;
    jsonToXml1(json,start,end,stack);
    doc+=stack.pop();
    //console.log(doc);
}
function jsonToXml1(json,start,end,stack){
    for(var i=0;i<json.children.length;i++){
        start = '<' + json.children[i].title + '>';
        end = '</' + json.children[i].title + '>';
        doc+= start;
        stack.push(end);
        //console.log(json.children[i]);
        if(json.children[i].children.length>0){
            jsonToXml1(json.children[i],'','',stack);
        }
        doc += stack.pop();
    }
}
function findObject(arr,obj){
    for(var g=0;g<arr.length;g++){
        if(arr[g].title==obj.nodeName){
            return g;
        }
    }
    return -1;
}
// Changes XML to JSON
function xmlToJson(xml,obj) {
    //console.log(xml);
    if(xml.hasChildNodes()){
        if(xml.nodeName!='#text'){
            //console.log(xml);
            for(var i=0;i<xml.childNodes.length;i++){
                if(xml.childNodes[i].nodeName!='#text') {
                    //console.log(xml.childNodes[i].nodeName);
                    //console.log(i);
                    if(findObject(obj,xml.childNodes[i])==-1)
                        obj.push({title:xml.childNodes[i].nodeName, children:[]});
                }
            }
            /*console.log('=============');
             for(var t=0;t<obj.length;t++)
             console.log(obj[t]);
             console.log(obj.length);*/
            for(var j=0;j<xml.childNodes.length;j++){
                if(xml.childNodes[j].nodeName!='#text'){

                    xmlToJson(xml.childNodes[j],obj[findObject(obj,xml.childNodes[j])].children);
                }
            }
        }
    }
    else
        return;
}

function traverseXml(node,obj,path,schemaInfo){

    var childs = $(node).children();

    if(childs.length == 0){
        var nodeName = node.tagName;
        return {title:nodeName, alias:nodeName,index:'true', isSchema:true,data_definition_id:schemaInfo.data_definition_id,data_definition_name:schemaInfo.data_definition_name,key:schemaInfo.data_definition_id+path,dataType:"text", path:path.split('_'),val_position:"",category:"",position:"",is_mapped:"false",mapped_from:""};
    }
    else{

        $.each(childs,function(index,child){

            var nodeName = child.tagName;
            var nodePath = path + "_"+ utils.trimWhiteSpaces(utils.removeSpecialCharactors(nodeName));
            var childObject = {title:nodeName,alias:nodeName,index:'true',isSchema:true,data_definition_id:schemaInfo.data_definition_id,data_definition_name:schemaInfo.data_definition_name,key:schemaInfo.data_definition_id+path,dataType:"text", path:nodePath.split('_'), children:[],val_position:"",category:"",position:"",is_mapped:"false",mapped_from:""};
            obj.children.push(traverseXml(child,childObject,nodePath,schemaInfo));
        });
        return obj;
    }
}




//////////////////////////////////// Spline Graph //////////////////////////////////////////////////////////////////////
/*
 function splineGraph(data,divId,xAxis,yAxis,label,aggregationText){
 if(typeof data != "undefined")
 displaySplineGraph(divId,label,xAxis,yAxis,data,aggregationText);

 }*/
function splineGraph1(data,divId,xAxis,yAxis,label){
    if(typeof data == "undefined")
        return;
    var docs=data;
    var graphSeries = [];
    var skipFirst=false;
    var yAxisData = [];
    var labelData = [];
    var xValues = [];
    yAxisData[yAxis] = [];
    for (var i=0;i<docs.length;i++){
        /*if(!skipFirst){
         skipFirst = true;
         }
         else*/{
            var datetime =  new Date(parseInt(docs[i][xAxis]));
            var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
            if(!isNaN(docs[i][yAxis])){
                yAxisData[yAxis].push(parseInt(docs[i][yAxis]));
                labelData.push(docs[i][label]);
                xValues.push(timestamp);
            }
            else{ ////text Values

            }
        }
    }
    var uniqueLabels = findUnique(labelData);
    console.log(uniqueLabels);
    for(var i=1;i<uniqueLabels.length;i++){
        graphSeries[uniqueLabels[i]] =[];
        for(var t=0;t<labelData.length;t++){
            if(uniqueLabels[i]==labelData[t])
                graphSeries[uniqueLabels[i]].push([xValues[t],yAxisData[yAxis][t]]);
//            else
//                graphSeries[uniqueLabels[i]].push([xValues[t],0]);
        }
    }

    var chartOptions = {
        chart: {
            zoomType: 'x',//,
            //renderTo: divId
            type: 'spline'
        },
        title: {
            text: $('#aggregationList :selected').text()
        },
        subtitle: {
            text: ''
        },
        xAxis: [{ type: 'datetime'   }],
        yAxis: {
            title: {
                text: yAxis
            },
            labels:{
                formatter: function(){
                    return this.value;
                }
            }
        },
        tooltip: { shared: true, crosshairs: true },
        series: [],
        credits: {
            enabled: false
        }
    };

    //var chart = new Highcharts.Chart(chartOptions);
    $(divId).highcharts(chartOptions);
    var chart = $(divId).highcharts();


//    console.log(graphSeries[uniqueLabels[1]]);
//    console.log(graphSeries[uniqueLabels[2]]);
//    console.log(graphSeries[uniqueLabels[3]]);
    for(var u=1;u<uniqueLabels.length;u++){
        addSeriesToChart(chart,uniqueLabels[u],graphSeries[uniqueLabels[u]]);
    }
}
function mapTextToNumeric(original,data,time){
    var mapped =[];
    for(var v=0;v<data.length;v++)
        mapped.push([time[v],original.indexOf(data[v])]);
    return mapped;
}
function findUnique(arr){
    var unique = [];
    for(var j=0;j<arr.length;j++){
        var t1 = unique.indexOf(arr[j]);
        var t2 = unique.lastIndexOf(arr[j]);
        if((t1==-1) && (t2==-1))
            unique.push(arr[j]);
    }
    var tmp = [];
    tmp.push('');
    for(var j=0;j<unique.length;j++){
        tmp.push(unique[j]);
    }
    return tmp;
}
function addSeriesToChart(chart,name,data){
    chart.addSeries({
        name: name,
        data: data
    });
}
function displaySplineGraph(divId,ids,xs,ys,data,aggregationText) {
    //console.log(ids);
    var graphSeries =[];
    var yAxisLabels =[];
    var key=[];
    var tempYAxisLabels = [];
    var hitRate = [];
    for(var l=0;l<ids.length;l++)
        graphSeries[ids[l]] = [];
    for(var l=0;l<ids.length;l++)
        tempYAxisLabels[ids[l]] = [];
    var xValues= [];
    /*$.ajax({
     url:url,dataType:'json',type:'get',
     success: function(data){*/
    //Parsing json
    //var docs = $.parseJSON(data[0].docs);
    //console.log(ids.length);
    var docs = data;
    //console.log(docs);
    var skipFirst=false;
    //$.each(docs, function(index,element){
    for (var i=0;i<docs.length;i++){
        /*if(!skipFirst){
         skipFirst = true;
         }
         else*/{
            var datetime =  new Date(parseInt(docs[i][xs]));
            var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
            //var keyPrefix="testDD:";
            //console.log(ids.length);
            for(var p=0;p<ids.length;p++){
                if(!isNaN(docs[i][ids[p]])){
                    graphSeries[ids[p]].push([timestamp,parseInt(docs[i][ids[p]])]);

                }
                else if(isNaN(docs[i][ids[p]]))  {
                    if(key.indexOf(ids[p])==-1)
                        key.push(ids[p]);
                    //graphSeries[ids[p]].push([timestamp,(docs[i][ids[p]])]);
                    tempYAxisLabels[ids[p]].push(docs[i][ids[p]]);
                }

                if(!isNaN(docs[i][ys]))
                    hitRate.push(parseInt(docs[i][ys]));
                else
                    hitRate.push(0);

            }
            xValues.push(timestamp);
        }
    }
    console.log(hitRate.length);
    for(var t=0;t<key.length;t++)
        yAxisLabels[key[t]] = [];
    for (var t=0;t<key.length;t++){
        yAxisLabels[key[t]] = findUnique(tempYAxisLabels[key[t]]);
        graphSeries[key[t]] = mapTextToNumeric(yAxisLabels[key[t]],tempYAxisLabels[key[t]],xValues);
        for(var f=1;f<yAxisLabels[key[t]].length;f++){
            graphSeries[yAxisLabels[key[t]][f]] = [];
            for(var b=0;b<graphSeries[key[t]].length;b++){
                if(yAxisLabels[key[t]].indexOf(yAxisLabels[key[t]][f])== yAxisLabels[key[t]].indexOf(tempYAxisLabels[key[t]][b]))
                    graphSeries[yAxisLabels[key[t]][f]].push([xValues[b],hitRate[b]]);
                /*else{
                 graphSeries[yAxisLabels[key[t]][f]].push([xValues[b],0]);
                 }*/
            }
        }
    }
    var chartOptions = {
        chart: {
            zoomType: 'x',//,
            //renderTo: divId
            type: 'spline'
        },
        title: {
            text: aggregationText
        },
        subtitle: {
            text: ''
        },
        xAxis: [{ type: 'datetime'   }],
        yAxis: {
            title: {
                text: ys
            },
            labels:{
                formatter: function(){
                    return this.value;
                }
            }
        },
        tooltip: { shared: true, crosshairs: true },
        series: [],
        credits: {
            enabled: false
        }
    };

    //var chart = new Highcharts.Chart(chartOptions);
    $(divId).highcharts(chartOptions);
    var chart = $(divId).highcharts();


    for(var u=0;u<ids.length;u++){
        if(key.indexOf(ids[u])==-1)
            addSeriesToChart(chart,ids[u],graphSeries[ids[u]]);
        else {
            for(var f=1;f<yAxisLabels[ids[u]].length;f++){
                addSeriesToChart(chart,yAxisLabels[ids[u]][f],graphSeries[yAxisLabels[ids[u]][f]]);
            }
        }
    }
}

////////////////////////////////////////////// Multiple y-axis ////////////////////////////////////////////
/*
 function multipleAxisGraph(data,elToShow,xAxis,yAxis,labels,aggregationText){
 //displayGraph(elToShow,yAxis,xAxis,url);
 if(labels.length<yAxis.length){
 for(var t=labels.length;t<yAxis.length;t++){
 labels.push(yAxis[t]);
 }
 }
 displayMultipleAxisGraph(elToShow,yAxis,xAxis,data,labels,aggregationText);
 }*/
/*function mapTextToNumeric(original,data,time){
 var mapped =[];
 for(var v=0;v<data.length;v++)
 mapped.push([time[v],original.indexOf(data[v])]);
 return mapped;
 }
 function findUnique(arr){
 var unique = [];
 for(var j=0;j<arr.length;j++){
 var t1 = unique.indexOf(arr[j]);
 var t2 = unique.lastIndexOf(arr[j]);
 if((t1==-1) && (t2==-1))
 unique.push(arr[j]);
 }
 var tmp = [];
 tmp.push('');
 for(var j=0;j<unique.length;j++){
 tmp.push(unique[j]);
 }
 return tmp;
 }*/
function addAxisNSeriesToChart(chart,name,data,opp,yAxis,yAxisLabels,key){
    chart.addAxis({
        title: {
            text: name,
            style:{
            }
        },
        labels:{
            formatter: function(){
                for(var g=0;g<key.length;g++){
                    if(key[g]==name){
                        return yAxisLabels[name][(this.value)];
                    }
                }
                return this.value;
            },
            style: {
            }
        },
        opposite: opp
    });
    chart.addSeries({
        name: name,
        yAxis: yAxis,
        data: data
    });
}
function displayMultipleAxisGraph(divId,ids,xs,data,labels,aggregationText) {
    var graphSeries =[];
    var yAxisLabels =[];
    var key=[];
    var tempYAxisLabels = [];
    for(var l=0;l<ids.length;l++)
        graphSeries[ids[l]] = [];
    for(var l=0;l<ids.length;l++)
        tempYAxisLabels[ids[l]] = [];
    var xValues= [];
    /*$.ajax({
     url: url,dataType:'json',type:'get',
     success:*/
    //$.get('data1.json',function(data){
    //Parsing json
    //var docs = $.parseJSON(data[0].docs);
    var docs = data;
    var tooltips = [];
    var tooltipsData = [];
    var skipFirst=false;
    //$.each(docs, function(index,element){
    for (var i=0;i<docs.length;i++){
        /*if(!skipFirst){
         skipFirst = true;
         }
         else*/{
            var datetime =  new Date(parseInt(docs[i][xs]));
            var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());

            for(var p=0;p<ids.length;p++){
                if(!isNaN(docs[i][ids[p]])){
                    tooltips["'"+timestamp+parseInt(docs[i][ids[p]])+ids[p]+"'"] = [];
                    tooltips["'"+timestamp+parseInt(docs[i][ids[p]])+ids[p]+"'"].push(labels[p]);
                    graphSeries[ids[p]].push([timestamp,parseInt(docs[i][ids[p]])]);
                }
                else if(isNaN(docs[i][ids[p]]))  {
                    if(key.indexOf(ids[p])==-1){
                        key.push(ids[p]);
                        tooltipsData[ids[p]]= [];
                    }
                    //graphSeries[ids[p]].push([timestamp,(docs[i][ids[p]])]);
                    tempYAxisLabels[ids[p]].push(docs[i][ids[p]]);
                    tooltipsData[ids[p]].push(docs[i][labels[p]]);
                }
            }
            xValues.push(timestamp);
        }
    }
    for(var t=0;t<key.length;t++)
        yAxisLabels[key[t]] = [];
    for (var t=0;t<key.length;t++){
        yAxisLabels[key[t]] = findUnique(tempYAxisLabels[key[t]]);
        graphSeries[key[t]] = mapTextToNumeric(yAxisLabels[key[t]],tempYAxisLabels[key[t]],xValues);
        for (var i=0;i<tempYAxisLabels[key[t]].length;i++){
            tooltips["'"+xValues[i]+yAxisLabels[key[t]].indexOf(tempYAxisLabels[key[t]][i])+key[t]+"'"] =[];
            tooltips["'"+xValues[i]+yAxisLabels[key[t]].indexOf(tempYAxisLabels[key[t]][i])+key[t]+"'"].push(tooltipsData[key[t]][i]);
        }
    }
    var chartOptions = {
        chart: {
            zoomType: 'x' ,
            type: 'spline'
            //renderTo: divId

        },
        title: {
            text: aggregationText
        },
        subtitle: {
            text: ''
        },
        xAxis: [{ type: 'datetime'}],
        yAxis: [],

        tooltip: { shared: true,
            formatter: function(){
                var s ='';//= '<b>'+ this.x +'</b>';

                $.each(this.points, function(i, point) {
                    s += tooltips["'"+point.x+point.y+point.series.name+"'"][0] +': '+
                        point.y ;
                    s+='<br/>';
                });

                return s;
            }
        },
        series: [],
        credits: {
            enabled: false
        }
    };
    //console.log(yAxisLabels[key[0]]);
    $(divId).highcharts(chartOptions);
    var chart = $(divId).highcharts();



    for(var u=0;u<ids.length;u++){
        if(u==0){
            addAxisNSeriesToChart(chart,ids[u],graphSeries[ids[u]],false,u,yAxisLabels,key);
        }
        else{
            addAxisNSeriesToChart(chart,ids[u],graphSeries[ids[u]],true,u,yAxisLabels,key);
        }
    }
    //}
    //});
}
//////////////////////////////////////////////////// Do nut graph /////////////////////////////////////////////////////////
function  spaceSplitter(Browser)
{
    // var n=Browser.split(" ");
    // console.log(n[0]);
    // return n[0];
    return Browser;
}

function getSubUniqueValues(data,toSearch,osKey,os,countKey){
    var uniqueValues = [];
    console.log(data);
    for(var i =0; i <data.length; i++) {

//        for(var key in obj){

        //console.log(toSearch);
        // console.log(uniqueValues);
        var frequecy = parseFloat(data[i][countKey]);
        //var indexFound = uniqueValues.indexOf(data[i][toSearch]);
        if(data[i][osKey]==os)
        {                       // spaceSplitter(data[i][toSearch]);
            // var indexFound=findIndexOfKey(uniqueValues, data[i][toSearch]);
            var indexFound=findIndexOfKey(uniqueValues, spaceSplitter(data[i][toSearch]));
            if(indexFound == -1){
//                  console.log("creating new index");
                uniqueValues.push( {y1: spaceSplitter(data[i][toSearch]), frequency:frequecy} );
            }else{
//                console.log("Updating frequency");
                uniqueValues[indexFound].frequency += frequecy;
            }
        }



    }

    return uniqueValues;
}
function get3rdLevelUniqueValues(data,os,browser,osKey,browserKey,versionKey,countKey){
    var uniqueValues = [];
    console.log(data);
    for(var i =0; i <data.length; i++) {

//        for(var key in obj){

        //  console.log(toSearch);
        //    console.log(uniqueValues);
        //
        //var indexFound = uniqueValues.indexOf(data[i][toSearch]);
        var frequecy = parseFloat(data[i][countKey]);
        if(data[i][osKey]==os)
        { if(data[i][browserKey]==browser)
        {
            var indexFound=findIndexOfKey(uniqueValues, data[i][versionKey]);
            if(indexFound == -1){
//                  console.log("creating new index");
                uniqueValues.push( {y1: data[i][versionKey], frequency:frequecy} );
            }else{
//                console.log("Updating frequency");
                uniqueValues[indexFound].frequency += frequecy;
            }
        }
        }



    }

    return uniqueValues;
}
function drawDonut (data,yaxis,el,countKey,aggregationText){
    //  alert(aggregationText)
    var  graphData = [];
    var categories = [];
    var brow=[];
    var vers=[];
    var drillDownArray=[];
//    for(var i=0; i<yaxis.length; i++){
    // console.log(data);
    var os = getUniqueValues(data,yaxis[0],countKey);
    //  var colors = Highcharts.getOptions().colors;
    // var colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
    var colors=[
        '#00cc00',
        '#0066b3',
        '#ff8000',
        '#ffcc00',
        '#330099',
        '#990099',
        '#ccff00',
        '#ff0000',
        '#808080',
        '#008f00',
        '#00487d',
        '#b35a00',
        '#b38f00',
        '#6b006b',
        '#8fb300',
        '#b30000',
        '#bebebe',
        '#80ff80',
        '#80c9ff',
        '#ffc080',
        '#ffe680',
        '#aa80ff',
        '#ee00cc',
        '#ff8080',
        '#666600',
        '#ffbfff',
        '#00ffcc',
        '#cc6699',
        '#999900',
        '#00cc00',
        '#0066b3',
        '#ff8000',
        '#ffcc00',
        '#330099',
        '#990099',
        '#ccff00',
        '#ff0000',
        '#808080',
        '#008f00',
        '#00487d',
        '#b35a00',
        '#b38f00',
        '#6b006b',
        '#8fb300',
        '#b30000',
        '#bebebe',
        '#80ff80',
        '#80c9ff',
        '#ffc080',
        '#ffe680',
        '#aa80ff',
        '#ee00cc',
        '#ff8080',
        '#666600',
        '#ffbfff',
        '#00ffcc',
        '#cc6699',
        '#999900',
        '#00cc00',
        '#0066b3',
        '#ff8000',
        '#ffcc00',
        '#330099',
        '#990099',
        '#ccff00',
        '#ff0000',
        '#808080',
        '#008f00',
        '#00487d',
        '#b35a00',
        '#b38f00',
        '#6b006b',
        '#8fb300',
        '#b30000',
        '#bebebe',
        '#80ff80',
        '#80c9ff',
        '#ffc080',
        '#ffe680',
        '#aa80ff',
        '#ee00cc',
        '#ff8080',
        '#666600',
        '#ffbfff',
        '#00ffcc',
        '#cc6699',
        '#999900'
    ];
    for(var j=0; j<os.length; j++){

        if(yaxis.length>1){
            brow= getSubUniqueValues(data,yaxis[1],yaxis[0],os[j].y1,countKey)

        }
        //START Here
        if(yaxis.length>2)
        {        drillDownArray=[];
            for(var i=0;i<brow.length;i++)
            {
                vers=get3rdLevelUniqueValues(data,os[j].y1,brow[i].y1,yaxis[0],yaxis[1],yaxis[2],countKey)

                drillDownArray.push({
                    y1:brow[i].y1,
                    frequency:brow[i].frequency,
                    subdrillDown:vers
                });
            }



        }
        categories.push(os[j].y1);
        if(yaxis.length>2)
        {
            graphData.push({
                name : os[j].y1,
                y:os[j].frequency,
                color:colors[j],

                drilldown:drillDownArray
            });
        }
        else
        {
            graphData.push({
                name : os[j].y1,
                y:os[j].frequency,
                color:colors[j],

                drilldown:brow
            });

        }
    }


//   console.log(categories);
    console.log("graphData");
    console.log(graphData);

//    }

    var browserData = [];
    var versionsData = [];
    var subVersionsData=[];
    for (var i = 0; i < graphData.length; i++) {

        // add browser data
        var num=(graphData[i].y/countValueSum)*100;
        var yVal= Math.round(num * 100) / 100 ;
        browserData.push({
            name: categories[i],
            y:  yVal,
            color: graphData[i].color
        });

        // add version data
        for (var j = 0; j < graphData[i].drilldown.length; j++) {
            var brightness = 0.24 - (j / graphData[i].drilldown.length) / 10 ;
            var bnum=((graphData[i].drilldown[j].frequency)/countValueSum)*100;
            var byVal= Math.round(bnum * 100) / 100 ;
            versionsData.push({
                name: graphData[i].drilldown[j].y1,
                y:byVal,
                color: Highcharts.Color(graphData[i].color).brighten(brightness).get()
            });
            //add subversion data
            if(yaxis.length>2)
            {
                for(var k=0;k<graphData[i].drilldown[j].subdrillDown.length;k++)
                {
                    var brightness = 0.2 - (j / graphData[i].drilldown[j].subdrillDown.length) / 5 ;
                    var vnum=((graphData[i].drilldown[j].subdrillDown[k].frequency)/countValueSum)*100;
                    var vyVal= Math.round(vnum * 100) / 100 ;
                    subVersionsData.push({
                        name: graphData[i].drilldown[j].subdrillDown[k].y1,
                        y:vyVal ,
                        color:Highcharts.Color(graphData[i].color).brighten(brightness).get()
                    });

                }
            }
        }
    }
    // Create the chart
    //  console.log(countValueSum);
    if(yaxis.length==1)
    {
        $(el).highcharts({
            chart: {
                type: 'pie'
            },
            credits: {
                enabled: false
            },
            title: {
                text: aggregationText
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
            tooltip: {
                formatter: function() {
                    var s = yaxis[0]+':'+'<b>'+ this.y +'</b>';


                    s += '<br/>'+ '<b>'+this.key+'</b>';



                    return s;
                }

            },

            series: [{
                name: yaxis[0],
                data: browserData,
                size: '100%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'black',
                    distance: -30
                }

            }]
        });
    }
    if(yaxis.length>1)
    {
        $(el).highcharts({
            chart: {
                type: 'pie'
            },
            credits: {
                enabled: false
            },
            title: {
                text: $('#aggregationList :selected').text()
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                }
            },
            tooltip: {
                valueSuffix: '%'
            },
            series: [{
                name: yaxis[0],
                data: browserData,
                size: '80%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'black',
                    distance: -30
                }
            } ,{
                name: yaxis[1],
                data: versionsData,
                size: '90%',
                innerSize: '80%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 1
                        return this.y > 0 ? '<b>'+ this.point.name +':</b> '+ this.y +'%'  : null;
                    }


                }

            }]
        });
    }
    if(yaxis.length>2)
    {
        $(el).highcharts({
            chart: {
                type: 'pie'
            },
            credits: {
                enabled: false
            },
            title: {
                text: $('#aggregationList :selected').text()
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false,
                    center: ['50%', '50%']
                },
                showInLegend: true
            },
            tooltip: {
                valueSuffix: '%'
            },
            series: [{
                name: yaxis[0],
                data: browserData,
                startAngle:110,
                size: '40%',
                dataLabels: {
                    formatter: function() {
                        return this.y > 5 ? this.point.name : null;
                    },
                    color: 'black',
                    distance: -30
                }
            } ,{
                name: yaxis[1],
                data: versionsData,
                startAngle:110,
                size: '80%',
                innerSize: '40%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 1

                        return this.y > 0 ? '<b>'+ this.point.name +':</b> '+ this.y +'%'  : null;
                    },
                    color: 'black',
                    distance: 0

                }
            },{
                name: yaxis[2],
                data: subVersionsData,
                startAngle:110,
                size: '90%',
                innerSize: '80%',
                dataLabels: {
                    formatter: function() {
                        // display only if larger than 1
                        return this.y > 0 ? '<b>'+ this.point.name +':</b> '+ this.y +'%'  : null;
                    }

                }
            }]
        });
    }
}
function findIndexOfKey(array,toSearch)
{
    for(var i=0;i<array.length;i++)
    {
        if(array[i].y1==toSearch)
        {
            return i;
        }

    }
    return -1;
}
var countValueSum = 0;
function getUniqueValues(data,toSearch,countKey){
    var uniqueValues = [];
    console.log(data);
    for(var i =0; i <data.length; i++) {

//        for(var key in obj){

        /*console.log(toSearch);
         console.log(uniqueValues);*/
        var frequecy = parseFloat(data[i][countKey]);
        countValueSum += frequecy;
        //var indexFound = uniqueValues.indexOf(data[i][toSearch]);
        var indexFound=findIndexOfKey(uniqueValues, data[i][toSearch]);

//            if(key == "")
//            console.log(data[i][toSearch] + " : " + indexFound);



        if(indexFound == -1){
//                  console.log("creating new index");
            uniqueValues.push( {y1: data[i][toSearch], frequency:frequecy} );
        }else{
//                console.log("Updating frequency");

            uniqueValues[indexFound].frequency += frequecy;
        }
    }
    console.log(i);
    console.log(uniqueValues);
//    });
    return uniqueValues;
}
//////////////////////////////////////////////////// Do nut graph /////////////////////////////////////////////////////////


/*
 function donutGraph(data,el,xAxis,yAxis,countKey,aggregationText){

 //    var countKey = "orders by os browser version";
 countValueSum = 0;
 drawDonut(data,yAxis,el,countKey,aggregationText);
 }
 */


///////////////////////////////////////////////// pie chart ///////////////////////////////////////////////////

function pieChartDraw(data,el,yAxis,keyword,aggregationText,subTitle){
    if(yAxis!=""){

        var colors=[
            '#00cc00',
            '#0066b3',
            '#ff8000',
            '#ffcc00',
            '#330099',
            '#990099',
            '#ccff00',
            '#ff0000',
            '#808080',
            '#008f00',
            '#00487d',
            '#b35a00',
            '#b38f00',
            '#6b006b',
            '#8fb300',
            '#b30000',
            '#bebebe',
            '#80ff80',
            '#80c9ff',
            '#ffc080',
            '#ffe680',
            '#aa80ff',
            '#ee00cc',
            '#ff8080',
            '#666600',
            '#ffbfff',
            '#00ffcc',
            '#cc6699',
            '#999900',
            '#00cc00',
            '#0066b3',
            '#ff8000',
            '#ffcc00',
            '#330099',
            '#990099',
            '#ccff00',
            '#ff0000',
            '#808080',
            '#008f00',
            '#00487d',
            '#b35a00',
            '#b38f00',
            '#6b006b',
            '#8fb300',
            '#b30000',
            '#bebebe',
            '#80ff80',
            '#80c9ff',
            '#ffc080',
            '#ffe680',
            '#aa80ff',
            '#ee00cc',
            '#ff8080',
            '#666600',
            '#ffbfff',
            '#00ffcc',
            '#cc6699',
            '#999900',
            '#00cc00',
            '#0066b3',
            '#ff8000',
            '#ffcc00',
            '#330099',
            '#990099',
            '#ccff00',
            '#ff0000',
            '#808080',
            '#008f00',
            '#00487d',
            '#b35a00',
            '#b38f00',
            '#6b006b',
            '#8fb300',
            '#b30000',
            '#bebebe',
            '#80ff80',
            '#80c9ff',
            '#ffc080',
            '#ffe680',
            '#aa80ff',
            '#ee00cc',
            '#ff8080',
            '#666600',
            '#ffbfff',
            '#00ffcc',
            '#cc6699',
            '#999900'
        ];
        var graphData = [];
        var graphValuexAxix = [];
        var graphTitle = '';
        var graphTitleY = '';
        var uniqueArray = [];
        if(keyword == ''){
            keyword = yAxis;
            graphData = withoutLabelPieChart(data,yAxis,keyword);
        }else{
            graphData = withLabelPie(data,yAxis,keyword);
        }

        if(graphData.length>0){
            var newGraphData = [];

            for(var i=0;i<graphData.length;i++){
                var parcial = [];
                parcial.push(graphData[i].keyword);
                parcial.push(parseFloat(graphData[i].percent));
                newGraphData.push({name:graphData[i].keyword,y:parseFloat(graphData[i].percent),color:colors[i]});
                //graphHistory.push({keyword:graphData[i].keyword,color:colors[i]});
            }
            var options = {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                yAxis:{
                    title: {
                        text: yAxis
                    }
                },
                title: {
                    text:aggregationText
                },
                subtitle: {
                    text:subTitle
                },
                tooltip: {
                    formatter: function() {
                        var counter = 0;
                        var name =this.point.name;
                        var tooltipHtml = '<b>Name :</b>'+name+'<br><b>Percentage:</b>'+Highcharts.numberFormat(this.percentage, 2) +' %<br><b>Count:</b>'+getCounterPie(graphData,name);
                        return tooltipHtml;
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            color: '#000000',
                            connectorColor: '#000000',
                            formatter: function() {
                                var name = '';
                                var titleToShow = this.point.name;
                                var sbutitle = titleToShow.substr(0,15);
                                //name = '<b>'+ sbutitle+'</b>:'+this.percentage.toFixed(2) +' %'+' ('+getCounterPie(graphData,this.point.name) + ")"
                                name = '<b>'+ sbutitle+'</b>:'+this.percentage.toFixed(2) +' %';
                                return name;
                            }

                        }
                    }

                },
                credits: {
                    enabled: false
                },
                series: [{
                    type: 'pie',
                    name: 'Browser share',
                    data:newGraphData
                }]
            };
            $(el).highcharts(options);
        }
        else{
            $(el).html("<div style='padding-top:20%;margin-left:45%;font-size: 16px; font-weight: bold;'>Can't show with 0%</div>");
        }
    }
    else{
        utils.displayAlert("Configure Graph Configuration First",false);

    }

}
//////////////////////////////////pie Chart2/////////////////
function pieChart2(data,el,xAxis,yAxis,keyword,aggregationText,subTitle){
    //alert("2222");
    console.log("///////////////////////////////")
    console.log(graphHistoryFlag)
    console.log(graphHistory)
    console.log("////////////////////////////////")
    if(yAxis!="" && keyword!="" ){

        var colors=[
            '#00cc00',
            '#0066b3',
            '#ff8000',
            '#ffcc00',
            '#330099',
            '#990099',
            '#ccff00',
            '#ff0000',
            '#808080',
            '#008f00',
            '#00487d',
            '#b35a00',
            '#b38f00',
            '#6b006b',
            '#8fb300',
            '#b30000',
            '#bebebe',
            '#80ff80',
            '#80c9ff',
            '#ffc080',
            '#ffe680',
            '#aa80ff',
            '#ee00cc',
            '#ff8080',
            '#666600',
            '#ffbfff',
            '#00ffcc',
            '#cc6699',
            '#999900',
            '#00cc00',
            '#0066b3',
            '#ff8000',
            '#ffcc00',
            '#330099',
            '#990099',
            '#ccff00',
            '#ff0000',
            '#808080',
            '#008f00',
            '#00487d',
            '#b35a00',
            '#b38f00',
            '#6b006b',
            '#8fb300',
            '#b30000',
            '#bebebe',
            '#80ff80',
            '#80c9ff',
            '#ffc080',
            '#ffe680',
            '#aa80ff',
            '#ee00cc',
            '#ff8080',
            '#666600',
            '#ffbfff',
            '#00ffcc',
            '#cc6699',
            '#999900',
            '#00cc00',
            '#0066b3',
            '#ff8000',
            '#ffcc00',
            '#330099',
            '#990099',
            '#ccff00',
            '#ff0000',
            '#808080',
            '#008f00',
            '#00487d',
            '#b35a00',
            '#b38f00',
            '#6b006b',
            '#8fb300',
            '#b30000',
            '#bebebe',
            '#80ff80',
            '#80c9ff',
            '#ffc080',
            '#ffe680',
            '#aa80ff',
            '#ee00cc',
            '#ff8080',
            '#666600',
            '#ffbfff',
            '#00ffcc',
            '#cc6699',
            '#999900'
        ];

        var graphData = [];
        var graphValuexAxix = [];
        var graphTitle = '';
        var graphTitleY = '';
        var uniqueArray = [];
        if(keyword == ''){
            keyword = yAxis;
            graphData = withoutLabelPieChart(data,yAxis,keyword);
        }else{
            graphData = withLabelPie(data,yAxis,keyword);
        }

        if(graphData.length>0){
            var newGraphData = [];

            for(var i=0;i<graphData.length;i++){
                var parcial = [];
                parcial.push(graphData[i].keyword);
                parcial.push(parseFloat(graphData[i].percent));
                // if(graphHistoryFlag){
                newGraphData.push({name:graphData[i].keyword,y:parseFloat(graphData[i].percent),color:getGraphHistory(graphData[i].keyword)});
                /* }else{
                 newGraphData.push({name:graphData[i].keyword,y:parseFloat(graphData[i].percent),color:colors[i]});
                 graphHistory.push({keyword:graphData[i].keyword,color:colors[i]});
                 }*/
            }
            console.log('newGraphData')
            console.log(newGraphData)
            var options = {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                yAxis:{
                    title: {
                        text: yAxis
                    }
                },
                title: {
                    text:aggregationText
                },
                subtitle: {
                    text:subTitle
                },
                tooltip: {
                    formatter: function() {
                        var counter = 0;
                        var name =this.point.name;
                        var tooltipHtml = '<b>Name :</b>'+name+'<br><b>Percentage:</b>'+Highcharts.numberFormat(this.percentage, 2) +' %<br><b>Count:</b>'+getCounterPie(graphData,name);
                        return tooltipHtml;
                    }
                },
                /*colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],*/
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            color: '#000000',
                            connectorColor: '#000000',
                            formatter: function() {
                                var name = '';
                                var titleToShow = this.point.name;
                                var sbutitle = titleToShow.substr(0,15);
                                name = '<b>'+ sbutitle+'</b>';/*:'+this.percentage.toFixed(2) +' %'+' ('+getCounterPie(graphData,this.point.name) + ")"*/
                                /*if(sbutitle.length>2){
                                 name = sbutitle[0]+' '+sbutitle[1]+'...';
                                 name = '<b>'+ name +'</b>: (' + getCounterPie(graphData,this.point.name) + ') ' + this.percentage.toFixed(2) +' %';
                                 }else{
                                 name = '<b>'+ this.point.name +'</b>: ('+getCounterPie(graphData,this.point.name) + ") "+ this.percentage.toFixed(2) +' %';
                                 }*/

                                return name;
                            }

                        }
                    }

                },
                credits: {
                    enabled: false
                },
                series: [{
                    type: 'pie',
                    name: 'Browser share',
                    data:newGraphData
                }]
            };



            //   graphHistoryFlag = false;
            //graphHistory=[];


            /*  Highcharts.setOptions({
             colors: ['white', 'black', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263',      '#6AF9C4']
             });*/
            $(el).highcharts(options);
        }else{
            $(el).html("<div style='padding-top:20%;margin-left:45%;font-size: 16px; font-weight: bold;'>Can't show with 0%</div>");
        }
    }
    else{
        utils.displayAlert("Configure Graph Configuration First",false);

    }

}
function getGraphHistory(key){
    for(var i=0;i<graphHistory.length;i++){
        if(graphHistory[i].keyword == key){
            return graphHistory[i].color;
        }
    }
}
function getCounterPie(graphData,key){
    for(var i=0;i<graphData.length;i++){
        if(graphData[i].keyword == key){
            return graphData[i].count;
            //break;
        }
    }


}
function withoutLabelPieChart(data,yAxis,keyword){
    var uniqueArray = [];
    for (var j=0; j<data.length; j++){
        if(uniqueArray.length>0){
            if(!utils.checkArrayPieIndex(uniqueArray,data[j][yAxis])){
                uniqueArray.push({keyword:data[j][yAxis],count:1});
            }else{
                for(var k=0;k<uniqueArray.length;k++){
                    if(uniqueArray[k].keyword == data[j][yAxis]){
                        var count = uniqueArray[k].count;
                        count = parseFloat(count) +parseFloat(1);
                        uniqueArray[k].count = count;
                    }
                }
            }

        }else{
            uniqueArray.push({keyword:data[j][yAxis],count:1});
        }
    }
    var total = 0;
    for(var i=0;i<uniqueArray.length;i++){
        total = (parseFloat(total) + parseFloat(uniqueArray[i].count));
    }
    var graphData = [];
    for(var i=0;i<uniqueArray.length;i++){
        var newCounter = uniqueArray[i].count;
        if(newCounter >0){
            var percent = (newCounter/total)*100;
            var perc = percent.toFixed(2);
            graphData.push({keyword:uniqueArray[i].keyword,percent:parseFloat(perc),count:newCounter});
        }
    }
    return graphData;
}
function withLabelPie(data,yAxis,keyword){
    var uniqueArray = [];
    for (var j=0; j<data.length; j++){
        if(uniqueArray.length>0){
            if(!utils.checkArrayPieIndex(uniqueArray,data[j][keyword])){
                if(isNaN(parseFloat(data[j][yAxis])) == false){
                    uniqueArray.push({keyword:data[j][keyword],key:parseFloat(data[j][yAxis])});
                }
            }else{
                for(var k=0;k<uniqueArray.length;k++){
                    if(uniqueArray[k].keyword == data[j][keyword]){
                        var newValue = parseFloat(uniqueArray[k].key)+parseFloat(data[j][yAxis]);
                        uniqueArray[k].key = newValue;
                    }
                }
            }
        }else{
            if(isNaN(parseFloat(data[j][yAxis])) == false){
                uniqueArray.push({keyword:data[j][keyword],key:parseFloat(data[j][yAxis])});
            }
        }
    }
    var total = 0;
    for(var i=0;i<uniqueArray.length;i++){
        total = (parseFloat(total) + parseFloat(uniqueArray[i].key));
    }
    var graphData = [];
    for(var i=0;i<uniqueArray.length;i++){
        var newCounter = uniqueArray[i].key;
        if(newCounter >0){
            var percent = (newCounter/total)*100;
            var perc = percent.toFixed(2);
            graphData.push({keyword:uniqueArray[i].keyword,percent:parseFloat(perc),count:newCounter});
        }

    }
    return graphData;
}
///////////////////////////////////////////// scatter /////////////////////////////////////////////////




function scatterPlot(data,el,xAxis,yAxis,aggregationText){

    var graphTitleY = '';
    var colors = Highcharts.getOptions().colors;
    var graphData = [];
    var counter=0;
    graphTitleY +=yAxis;
    var subData = [];
    for(var j=0;j<data.length;j++){
        if(j>0){
            var dta =[];

            dta.push(parseFloat(data[j][xAxis]));
            dta.push(parseFloat(data[j][yAxis]));
            subData.push(dta);

        }
    }
    graphData.push({name:yAxis,color:colors[counter], data:subData});
    console.log("Scatter Plot Graph Data");
    console.log(graphData)

    var title = xAxis+' VS '+graphTitleY;
    var xTitile=""
    var yTitile=""
    if(xAxis=="Cost_Sum"){
        xTitile="Cost";
        yTitile="Sale";

    }
    else if(yAxis=="Cost_Sum")
    {
        yTitile="Cost";
        xTitile="Sale";
    }
    else{
        yTitile=yAxis;
        xTitile=xAxis;
    }

    var options = {
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: $('#aggregationList :selected').text()
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            title: {
                enabled: true,
                text: xTitile
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title:{
                enabled: true,
                text: yTitile
            }
        },
        /*legend: {
         layout: 'vertical',
         align: 'left',
         verticalAlign: 'top',
         x: 100,
         y: 70,
         floating: true,
         backgroundColor: '#FFFFFF',
         borderWidth: 1
         },*/
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '<b>'+xTitile+'</b>: {point.x} , </br><b>'+yTitile+': {point.y}'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: graphData
    };
    $(el).highcharts(options);
}
///////////////////////////////////////////////////////////////// Algorithm Scatter plot//////////////////////////////////////////
function algoScatterPlot(dataResult,algoName,el){
    var timestamp = 0;
    for (key in dataResult) {
        var finalKey = key.replace(/[-\s]/g, ',')
        finalKey = finalKey.replace(/[:\s]/g, ',');
        var tokens = finalKey.split(',');
        var tokeStamp = Date.UTC(parseInt(tokens[0]),parseInt(tokens[1]),parseInt(tokens[2]),parseInt(tokens[3]),parseInt(tokens[4]),parseInt(tokens[5]),parseInt(tokens[6]));
        if(tokeStamp > timestamp){
            timestamp = tokeStamp;
        }
    }
    var graphData = [];
    var colors = Highcharts.getOptions().colors;
    for (key in dataResult) {
        var finalKey = key.replace(/[-\s]/g, ',')
        finalKey = finalKey.replace(/[:\s]/g, ',');
        var tokens = finalKey.split(',');
        var tokeStamp = Date.UTC(parseInt(tokens[0]),parseInt(tokens[1]),parseInt(tokens[2]),parseInt(tokens[3]),parseInt(tokens[4]),parseInt(tokens[5]),parseInt(tokens[6]));
        if(tokeStamp == timestamp){
            var subData = JSON.parse(dataResult[key]);
            for(sub in subData){
                var subData2 = subData[sub];
                var counter=0;
                for(sub2 in subData2){
                    var subData3 = subData2[sub2];
                    var subDataArray = [];
                    for(var i=0;i<subData3.length;i++){
                        var dataObject = JSON.parse(subData3[i]);
                        var dta =[];
                        for(dKey in dataObject){
                            dta.push(parseFloat(dataObject[dKey]));
                        }
                        subDataArray.push(dta);
                    }
                    graphData.push({name:'Cluster '+sub2,color:colors[counter], data:subDataArray});

                    counter++;
                }
            }
        }
    }
    var options = {
        chart: {
            type: 'scatter',
            zoomType:'x'
        },
        title: {
            text: algoName
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },

        yAxis: {
            title: {
                text: ''
            }
        },
        legend: {  x: 0, verticalAlign: 'bottom',  y: 0, floating: false, backgroundColor: '#FFFFFF', layout : 'horizontal' },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                }
            }
        },
        credits: {
            enabled: false
        },
        series: graphData,
        tooltip: {
            formatter: function() {
                var counter = 0;
                var xVal = this.point.x;
                var yVal = this.point.y;
                var name = this.series.name;
                var tooltipHtml = '<b>Name:  </b>'+name+'<br><b>Lat:  </b>'+ Highcharts.numberFormat(xVal, 2) +' <br><b>Long:  </b>'+ Highcharts.numberFormat(yVal, 2);
                return tooltipHtml;
            }
        }
    };
    $(el).highcharts(options);
}

/////////////////////////////////////////////////////////////   Bar Graph //////////////////////////////////////////////////////////////////////



function barGraph( data, el, xAxis, yAxis, label,aggregationText ){
    var docs = data; //$.parseJSON(response_data[0].docs);
//    var schema = $.parseJSON(response_data[0].schema);

    if(typeof docs == "undefined")
        return;
    var series = [{name:yAxis,data:[]}];
    var tempYAxisLabels = [];
    var xValues = [];
    var yAxisLabels =[];
    var flag=false;
    var skipFirst= false;
    if(label == ""){
        for(var i=0; i < docs.length;i++ ){
            var record = docs[i];
            for (var key in record){
                //var datetime =  new Date(parseInt(record[xAxis]));
                var datetime =  new Date(parseInt(docs[i][xAxis])-(5*60*60*1000)); // coversion from GMT+5 to GMT
                var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
                for(var j = 0; j < series.length; j++ ){
                    if(key.toLowerCase() == series[j].name.toLowerCase() && typeof record[key] != "undefined"){
                        if( record[key]==""){
                            series[j].data.push([timestamp,0]);
                        }else if(isNaN((record[key]))== false){
                            /*if(!skipFirst){
                             skipFirst=true;
                             }
                             else{*/
                            console.log(record[key]);
                            series[j].data.push([timestamp,parseInt(record[key])]);
                            //console.log(j);
                            //}
                        }else{
                            if(!skipFirst){
                                skipFirst=true;
                                tempYAxisLabels[yAxis]=[];
                            }
                            /*else{*/
                            console.log(key);
                            flag=true;
                            tempYAxisLabels[key].push(record[key]);
                            xValues.push(timestamp);
                            /*}*/
                        }
                    }
                    else if (key.toLowerCase() != series[j].name.toLowerCase()){
                        series[j].data.push([timestamp,0]);
                    }
                }
            }
        }
    }
    else if(label != ""){
        var tooltipKeyword = [];
        var tooltips =[];
        var keywordsData =[];
        var keyword= label;

        for(var i=0; i < docs.length;i++ ){

            var record = docs[i];

//            console.log(record);
//            console.log(yAxis);
            for (var key in record){

                //var datetime =  new Date(parseInt(record.timestamp));
                var datetime =  new Date(parseInt(docs[i][xAxis])-(5*60*60*1000)); // coversion from GMT+5 to GMT
                var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
                for(var j = 0; j < series.length; j++ ){

                    if(key.toLowerCase() == series[j].name.toLowerCase() && typeof record[key] != "undefined"){

                        if( record[key]==""){

                            tooltipKeyword["0"] = [];
                            tooltipKeyword["0"].push(record[keyword]);
                            series[j].data.push([timestamp,0]);

                        }else if(isNaN((record[key]))== false){

                            tooltipKeyword[timestamp+parseInt(record[key])] = [];
                            tooltipKeyword[timestamp+parseInt(record[key])].push(record[keyword]);
                            series[j].data.push([timestamp,parseInt(record[key])]);

                        }else{
//                                tooltipKeyword["0"] = [];
//                                tooltipKeyword["0"].push(record[keyword]);
                            if(!skipFirst){
                                skipFirst=true;
                                tempYAxisLabels[yAxis]=[];
                            }
                            /*else*/{
                                //series[j].data.push([timestamp,0]);
                                //graphSeries[ids[p]].push([timestamp,(docs[i][ids[p]])]);

                                flag=true;
                                tempYAxisLabels[key].push(record[key]);
                                //tooltips.push(record[key]);
                                xValues.push(timestamp);
                                keywordsData.push(record[keyword]);
                            }
                        }
                    }
                }
            }
        }
    }
    if(flag){
        yAxisLabels[yAxis] = findUnique(tempYAxisLabels[yAxis]);
        console.log(tempYAxisLabels[yAxis]);
        series[0].data = mapTextToNumeric(yAxisLabels[yAxis],tempYAxisLabels[yAxis],xValues);
        if(label != "" && flag){
            for(var r=0;r<tempYAxisLabels[yAxis].length;r++){
                tooltips.push(yAxisLabels[yAxis].indexOf(tempYAxisLabels[yAxis][r]));
            }
            for(var i=0;i<series[0].data.length; i++){
                tooltipKeyword[xValues[i]+tooltips[i]] = [];
                tooltipKeyword[xValues[i]+tooltips[i]].push(keywordsData[i]);
            }
        }
    }
    var options = {
        credits: {
            enabled: false
        },
        title: {
            text: aggregationText
        },
        chart: {
//                renderTo: containerDiv,
            zoomType: 'x' ,
            type: 'column'
        },

        yAxis: {
            title: {
                text: yAxis
            },
            labels:{
                formatter: function(){
                    if(flag){
                        return yAxisLabels[yAxis][(this.value)];
                    }
                    return this.value;
                }
            }
        },
        xAxis: {
            type: 'datetime'
        },
        series: series
    };
    if( label!="" ){
        options.tooltip =  {
            formatter: function(){
                //console.log('\n'+ this.y);
                return tooltipKeyword[this.x+this.y][0]+ " : " + this.y;
            }
        }
    }
    $(el).highcharts(options);
}


////////////////////////////////////////// Area Graph /////////////////////////////////////////////////////////////////

function areaGraph(data, el, xAxis, yAxis, label,aggregationText){
    var docs = data; //$.parseJSON(response_data[0].docs);
    if(typeof docs == "undefined")
        return;
    var series = [{name:yAxis,data:[]}];
    if(label == ""){
        for(var i=0; i < docs.length;i++ ){
            var record = docs[i];
            for (var key in record){
                var datetime =  new Date(parseInt(record[xAxis]));
                var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
                for(var j = 0; j < series.length; j++ ){
                    if(key.toLowerCase() == series[j].name.toLowerCase() && typeof record[key] != "undefined"){
                        if( record[key]==""){
                            series[j].data.push([timestamp,0]);
                        }else if(isNaN(parseInt(record[key]))== false){
                            series[j].data.push([timestamp,parseInt(record[key])]);
                        }else{
                            series[j].data.push([timestamp,0]);
                        }
                    }
                }
            }
        }
    }
    else if(label != ""){
        var tooltipKeyword = [];
        var tooltips =[];
        var keywordsData =[];
        var keyword= label;
        for(var i=0; i < docs.length;i++ ){
            var record = docs[i];
            for (var key in record){
                var datetime =  new Date(parseInt(record[xAxis]));
                var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
                for(var j = 0; j < series.length; j++ ){
                    if(key.toLowerCase() == series[j].name.toLowerCase() && typeof record[key] != "undefined"){
                        if( record[key]==""){
                            tooltipKeyword["0"] = [];
                            tooltipKeyword["0"].push(record[keyword]);
                            series[j].data.push([timestamp,0]);
                        }else if(isNaN(parseInt(record[key]))== false){
                            tooltipKeyword[timestamp+parseInt(record[key])] = [];
                            tooltipKeyword[timestamp+parseInt(record[key])].push(record[keyword]);
                            series[j].data.push([timestamp,parseInt(record[key])]);
                        }else{
                            tooltipKeyword["0"] = [];
                            tooltipKeyword["0"].push(record[keyword]);
                            series[j].data.push([timestamp,0]);
                        }
                    }
                }
            }
        }
    }
    var options = {
        credits: {
            enabled: false
        },
        title: {
            text: aggregationText
        },
        chart: {
            type: 'area',
            zoomType: 'x'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis:{

            title: {
                text: yAxis
            }
        },
        series: series
    };
    if( label!="" ){
        console.log(tooltipKeyword);
        options.tooltip =  {
            formatter: function(){
                //console.log('\n'+ this.y);
                return tooltipKeyword[this.x+this.y][0]+ " : " + this.y;
            }
        }
    }
    $(el).highcharts(options);

}
/////////////////////////////////////////////////Time-Line Bar Graph///////////////////////////////////////
function timelineBarGraph(data, el, xAxis, yAxis, label,aggregationText){
    var docs = data;
    var series = [];
    var tooltips = [];
    for(var y=0;y<yAxis.length;y++){
        var series2 = [];
        for (var i=0;i<docs.length;i++){
            var datetime =  new Date(parseInt(docs[i][xAxis]));
            var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
            if(!isNaN(docs[i][yAxis[y]])){
                series2.push([timestamp,parseFloat(docs[i][yAxis[y]])]);
                if(label!=""){
                    if(!isNaN(docs[i][label])){
                        tooltips["'"+timestamp+parseFloat(docs[i][yAxis[y]])+"'"]=[];
                        tooltips["'"+timestamp+parseFloat(docs[i][yAxis[y]])+"'"].push(parseFloat(docs[i][label]));
                    }
                    else if(isNaN(docs[i][label])){
                        tooltips["'"+timestamp+parseFloat(docs[i][yAxis[y]])+"'"] = [];
                        tooltips["'"+timestamp+parseFloat(docs[i][yAxis[y]])+"'"].push((docs[i][label]));
                    }
                }
            }
            else
                series2.push([timestamp,0]);
            if(label!="") {
                if (!isNaN(docs[i][label])) {
                    tooltips["'" + timestamp + 0 + "'"] = [];
                    tooltips["'" + timestamp + 0 + "'"].push(parseFloat(docs[i][label]));
                }
                else if (isNaN(docs[i][label])) {
                    tooltips["'" + timestamp + 0 + "'"] = [];
                    tooltips["'" + timestamp + 0 + "'"].push((docs[i][label]));
                }
            }


        }
        series.push({type:'column',name:yAxis[y],data:series2,color:colorsArray[y]});
    }
    var chartOptions={
        chart: {},
        credits: {
            enabled: false
        },
        yAxis:{
            title: {
                text: yAxis
            }
        },
        tooltip: {
            formatter: function () {
                var s = '<b>' + Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '</b>';
                $.each(this.points, function (i, point) {
                    var t=yAxis[i];
                    if(label!=""){
                        t=tooltips["'"+this.x+point.y+"'"];
                        s += '<br/><span style="color:'+point.series.color+'">'+ t +': </span>'+ point.y ;
                    }else{
                        s += '<br/><span style="color:'+point.series.color+'">'+ t +': </span>'+ point.y ;
                    }
                });
                return s;
            }
        },
        rangeSelector: {
            enabled:false
        },
        legend: {
            enabled: true
        },
        title: {
            text: aggregationText
        },

        series: series
    };
    $(el).highcharts('StockChart',chartOptions);
}

var result = [];
var alertMsgs = [];
function evaluateExpression(data,obj,message){

    if(typeof obj == 'undefined')
        return;
    var operators = [];
    var operands = [];
    var docs = data;
    var t1;
    for(var i=0;i<obj.length;i++){
        if(i!=0)
            operators.push(obj[i]["operator"]);
    }
    for (var i=0;i<docs.length;i++){
        for(var t = 0; t<obj.length; t++){
            if(obj[t]["expression"][0]["operator"]=='=')
                operands.push((docs[i][obj[t]["expression"][0]["to_compare_field_name"]] == ((obj[t]["expression"][0]["with_compare_type"]=="stream")?docs[i][obj[t]["expression"][0]["with_compare_field_name"]]:obj[t]["expression"][0]["with_compare_value"])) ? true :false);
            else if(obj[t]["expression"][0]["operator"]=='!=')
                operands.push((docs[i][obj[t]["expression"][0]["to_compare_field_name"]] != ((obj[t]["expression"][0]["with_compare_type"]=="stream")?docs[i][obj[t]["expression"][0]["with_compare_field_name"]]:obj[t]["expression"][0]["with_compare_value"])) ? true :false);
            else if(obj[t]["expression"][0]["operator"]=='<')
                operands.push((docs[i][obj[t]["expression"][0]["to_compare_field_name"]] < ((obj[t]["expression"][0]["with_compare_type"]=="stream")?docs[i][obj[t]["expression"][0]["with_compare_field_name"]]:obj[t]["expression"][0]["with_compare_value"])) ? true :false);
            else if(obj[t]["expression"][0]["operator"]=='>')
                operands.push((docs[i][obj[t]["expression"][0]["to_compare_field_name"]] > ((obj[t]["expression"][0]["with_compare_type"]=="stream")?docs[i][obj[t]["expression"][0]["with_compare_field_name"]]:obj[t]["expression"][0]["with_compare_value"])) ? true :false);
            else if(obj[t]["expression"][0]["operator"]== '<=')
                operands.push((docs[i][obj[t]["expression"][0]["to_compare_field_name"]] <= ((obj[t]["expression"][0]["with_compare_type"]=="stream")?docs[i][obj[t]["expression"][0]["with_compare_field_name"]]:obj[t]["expression"][0]["with_compare_value"])) ? true :false);
            else if(obj[t]["expression"][0]["operator"]=='>=')
                operands.push((docs[i][obj[t]["expression"][0]["to_compare_field_name"]] >= ((obj[t]["expression"][0]["with_compare_type"]=="stream")?docs[i][obj[t]["expression"][0]["with_compare_field_name"]]:obj[t]["expression"][0]["with_compare_value"])) ? true :false);
        }
        for(t1=0;t1<operators.length; t1++){
            if(operators[t1] == 'AND'){
                operands[t1+1] = operands[t1] && operands[t1+1];
            }
            else if(operators[t1] == 'OR'){
                operands[t1+1] = operands[t1] || operands[t1+1];
            }
        }
        if(operands[t1] ){
            result.push(i);
            alertMsgs.push(message);
        }
        operands.length=0;
        operands = [];

    }
}
///////////////////////////////Multiple Dimensions real time graph//////////////////////////////
function filterData1(data,ref,xAxis,yAxis,values){
    var unique = values;

    var series = {};
    var flag = false;
    var timestamps = [];
    for(var k=0;k<unique.length;k++){
        series[unique[k]] = [];
    }
    for(var g=0;g<data.length;g++){
        var datetime =  new Date(parseInt(data[g][xAxis]));
        var timestamp = Date.parse(datetime.toString());
        if(timestamps.indexOf(timestamp)==-1)
            timestamps.push(timestamp);
    }
    //console.log(timestamps);
    for(var tt=0;tt<timestamps.length;tt++){
        for(var ts=0;ts<data.length;ts++){
            var datetime =  new Date(parseInt(data[ts][xAxis]));
            var timestamp = Date.parse(datetime.toString());
            if(timestamps[tt]==timestamp){
                var key= data[ts][ref].replace(/"/g,'');
                if(unique.indexOf(key)!=-1){
                    if(!isNaN(data[ts][yAxis]))
                        series[key].push([timestamp,parseFloat(data[ts][yAxis])]);
                    else
                        series[key].push([timestamp,0]);
                    flag=true;
                }
            }
        }
        if(!flag){   //push zeros in all series when record has no reference field's values
            for(var z=0;z<unique.length;z++){
                series[unique[z]].push([timestamps[tt],0]);
            }
        }
        else{
            flag = false;
            for(var z=0;z<unique.length;z++){
                //console.log(series[unique[z]].length);
                if(series[unique[z]].length<(tt+1)){
                    series[unique[z]].push([timestamps[tt],0]);
                }
            }
        }
    }
    /*for(var g=0;g<data.length;g++){
     var datetime =  new Date(parseInt(data[g][xAxis]));

     var timestamp = Date.parse(datetime.toString());//Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
     for(var j=0;j<unique.length;j++){
     if(data[g][ref].replace(/"/g,'')==unique[j]){
     if(!isNaN(data[g][yAxis]))
     series[unique[j]].push([timestamp,parseInt(data[g][yAxis])]);
     else
     series[unique[j]].push([timestamp,0]);
     for(var z=0;z<unique.length;z++){
     if(z!=j)
     series[unique[z]].push([timestamp,0]);
     }
     flag = true;
     }
     }
     if(!flag){
     for(var z=0;z<unique.length;z++){
     series[unique[z]].push([timestamp,0]);
     }
     }
     else
     flag = false;
     }*/
    return {series:series};
}
function filterData_inrix(data,ref,xAxis,yAxis,values){
    var unique = values;
    var valueOfYaxis;
    var series = {};
    var flag = false;
    var timestamps = [];
    for(var k=0;k<unique.length;k++){
        series[unique[k]] = [];
    }
    for(var g=0;g<data.length;g++){
        var datetime =  new Date(parseInt(data[g][xAxis]));
        var timestamp = Date.parse(datetime.toString());
        if(timestamps.indexOf(timestamp)==-1)
            timestamps.push(timestamp);
    }
    //console.log(timestamps);
    for(var tt=0;tt<timestamps.length;tt++){
        for(var ts=0;ts<data.length;ts++){
            var datetime =  new Date(parseInt(data[ts][xAxis]));
            var timestamp = Date.parse(datetime.toString());
            if(timestamps[tt]==timestamp){
                var key= data[ts][ref].replace(/"/g,'');
                if(unique.indexOf(key)!=-1){
                    if(!isNaN(data[ts][yAxis]))
                        series[key].push([timestamp,parseFloat(data[ts][yAxis])]);
                    else
                        series[key].push([timestamp,0]);
                    flag=true;
                }
            }
        }
        if(!flag){   //push zeros in all series when record has no reference field's values
            valueOfYaxis = 0;
            for(var z=0;z<unique.length;z++){
                if(tt!=0)
                    valueOfYaxis = series[unique[z]][series[unique[z]].length-1][1];
                series[unique[z]].push([timestamps[tt],valueOfYaxis]);
            }
        }
        else{
            flag = false;
            valueOfYaxis = 0;
            for(var z=0;z<unique.length;z++){
                if(tt!=0)
                    valueOfYaxis = series[unique[z]][series[unique[z]].length-1][1];
                if(series[unique[z]].length<(tt+1)){
                    series[unique[z]].push([timestamps[tt],valueOfYaxis]);
                }
            }
        }
    }
    return {series:series};
}
var splineTimer;
function multiDimensionalRealTimeSplineGraph(data, el, xAxis, yAxis,referenceField,values,aggText){
    //var docs = filterData1(data,referenceField,xAxis,yAxis,values);//$.parseJSON(data[0].docs);
    var docs = filterData_inrix(data,referenceField,xAxis,yAxis,values);//$.parseJSON(data[0].docs);
    var initialLimit=20;
    var series1 = [];

    $(el).unbind();
    for(var t=0;t<values.length;t++){
        series1[values[t]] = [];
        for(var y=0;y<docs.series[values[t]].length;y++){
            if(y<initialLimit)
                series1[values[t]].push([docs.series[values[t]][y][0],docs.series[values[t]][y][1]]);
            else {
                break;
            }
        }
    }
    var seriesFinal = [];
    for(var u=0;u<values.length;u++){
        seriesFinal.push({
            name: values[u],
            type: 'spline',
            data: series1[values[u]]
        });

    }

    var chartOptions={
        chart: {

            events : {
                load : function() {
                    clearInterval(splineTimer);
                    // set up the updating of the chart each second
                    var chartSeries = this;
                    var y1=initialLimit;

                    var maxLimit = docs.series[values[0]].length;

                    if(initialLimit<maxLimit){
                        splineTimer = setInterval(function(){
                            if(y1<maxLimit){
                                for(var t1=0;t1<values.length;t1++){
                                    var x = docs.series[values[t1]][y1][0],
                                        y = docs.series[values[t1]][y1][1];
                                    if(t1+1 == values.length){
                                        chartSeries.series[t1].addPoint([x,y],true,true);
                                    }
                                    else{
                                        chartSeries.series[t1].addPoint([x,y],false,true);
                                    }
                                }
                                y1++;
                            }
                            else{
                                $(el).unbind();
                                clearInterval(splineTimer);
                            }
                        },1000);
                    }
                    else{
                        $(el).unbind();
                        clearInterval(splineTimer);
                    }
                }
            }
        },
        credits: {
            enabled: false
        },
        xAxis: [{ type: 'datetime'   }],
        yAxis:{
            title: {
                text: yAxis
            }
        },
        tooltip:{
            shared: true , crosshairs: true
        },
        title: {
            text: (aggText!='')?aggText:'Real Time Spline Graph'
        },
        navigation: {
            buttonOptions: {
                x: -20
            }
        },
        series: seriesFinal
    };

    $(el).highcharts(chartOptions);


}
function findOccurrences(array,value){
    var occurringIndices = [];
    for(var g=0;g<array.length;g++)
        if(array[g]==value)
            occurringIndices.push(g);
    return occurringIndices;
}
///////////////////////////////////////////////Real time Updating timeline graph////////////////
function timelineRealTimeGraph(data, el, xAxis, yAxis, label,aggregationText){

    var docs= data;
//    const initialLimit=20;
    var initialLimit=20;
    var series1 = {};
    var series2 = {};
    for(var i=0;i<yAxis.length;i++){
        series1[yAxis[i]] = [];
        series2[yAxis[i]] = [];
    }
    var tooltips = [];
    var resXY = [];
    var messageKeys = [];
    for(var iterator=0;iterator<yAxis.length;iterator++){
        for (var i=0;i<docs.length;i++){
            var datetime =  new Date(parseInt(docs[i][xAxis]));
            var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
            if(!isNaN(docs[i][yAxis[iterator]])){
                if(i<initialLimit){
                    if(result.indexOf(i)!= -1)  {
                        series1[yAxis[iterator]].push({x:timestamp,y:parseFloat(docs[i][yAxis[iterator]]),color:'#FF0000',marker:{fillColor:'#FF0000',lineColor:'#FF0000',states:{hover:{fillColor:'#FF0000',lineColor:'#FF0000'}}}});
                        resXY.push(timestamp+':'+parseFloat(docs[i][yAxis[iterator]]));
                        messageKeys[timestamp+':'+parseFloat(docs[i][yAxis[iterator]])]=[];
                        /////////////multiple notifications
                        //console.log(findOccurrences(result,i));
                        //messageKeys[timestamp+':'+parseFloat(docs[i][yAxis])].push(result.indexOf(i));
                        var occurr= findOccurrences(result,i)
                        for(var n=0;n<occurr.length;n++)
                            messageKeys[timestamp+':'+parseFloat(docs[i][yAxis[iterator]])].push(occurr[n]);
                    }
                    else
                        series1[yAxis[iterator]].push([timestamp,parseFloat(docs[i][yAxis[iterator]])]);
//                console.log(result[i]);
                }
                else if(i>=initialLimit){
                    /*if(result[i]==true||result[i]=='true')
                     series2.push({x:timestamp,y:parseFloat(docs[i][yAxis]),color:'#FF0000',marker:{fillColor:'#FF0000',lineColor:'#FF0000',states:{hover:{fillColor:'#FF0000',lineColor:'#FF0000'}}}});
                     else*/
                    series2[yAxis[iterator]].push([timestamp,parseFloat(docs[i][yAxis[iterator]])]);
                }
                if(label!=""){
                    if(!isNaN(docs[i][label])){
                        tooltips["'"+timestamp+parseFloat(docs[i][yAxis[iterator]])+"'"]=[];
                        tooltips["'"+timestamp+parseFloat(docs[i][yAxis[iterator]])+"'"].push(parseFloat(docs[i][label]));
                    }
                    else if(isNaN(docs[i][label])){
                        tooltips["'"+timestamp+parseFloat(docs[i][yAxis[iterator]])+"'"] = [];
                        tooltips["'"+timestamp+parseFloat(docs[i][yAxis[iterator]])+"'"].push((docs[i][label]));
                    }
                }
            }
            else{
                if(i<initialLimit) {
                    if(result.indexOf(i)!=-1){
                        series1[yAxis[iterator]].push({x:timestamp,y:0,color:'#FF0000',marker:{fillColor:'#FF0000',lineColor:'#FF0000',states:{hover:{fillColor:'#FF0000',lineColor:'#FF0000'}}}});
                        resXY.push(timestamp+':'+0);
                        messageKeys[timestamp+':'+0]=[];
                        var occurr= findOccurrences(result,i)
                        for(var n=0;n<occurr.length;n++)
                            messageKeys[timestamp+':'+0].push(occurr[n]);
                    }
                    else{
                        series1[yAxis[iterator]].push([timestamp,0]);
                    }

                }
                else if(i>=initialLimit){
                    series2[yAxis[iterator]].push([timestamp,0]);
                }
                if(label!=""){
                    if(!isNaN(docs[i][label])) {
                        tooltips["'"+timestamp+0+"'"]=[];
                        tooltips["'"+timestamp+0+"'"].push(parseFloat(docs[i][label]));
                    }
                    else if(isNaN(docs[i][label])){
                        tooltips["'"+timestamp+0+"'"]=[];
                        tooltips["'"+timestamp+0+"'"].push((docs[i][label]));
                    }
                }
            }
        }
    }
    var msgs = [];
    var res = [];
    for(var f=0;f<alertMsgs.length;f++)
        msgs.push(alertMsgs[f]);
    for(var f=0;f<result.length;f++)
        res.push(result[f]);
    var seriesFinal = [];
    for(var u=0;u<yAxis.length;u++){
        seriesFinal.push({
            name: yAxis[u],
            data: series1[yAxis[u]],
            marker : {
                enabled : true
            }
        });

    }
    var chartOptions={
        chart: {
            events : {
                load : function() {
                    // set up the updating of the chart each second
                    console.log(this.series);
                    var chartSeries = this;
                    var it=0;
                    var timer;
                    var l = initialLimit;
                    if(docs.length> initialLimit){
                        timer = setInterval(function() {
                            for(var yAxisCounter=0;yAxisCounter<yAxis.length;yAxisCounter++){
                                if(it<series2[yAxis[yAxisCounter]].length){
                                    var x = series2[yAxis[yAxisCounter]][it][0],
                                        y = series2[yAxis[yAxisCounter]][it][1];
                                    if(res.indexOf(l)!=-1) {
                                        chartSeries.series[yAxisCounter].addPoint({x:x,y:y,color:'red',marker:{fillColor:'red',lineColor:'red',states:{hover:{fillColor:'red',lineColor:'red'}}}}, true, true);
                                        resXY.push(x+':'+y);
                                        messageKeys[x+':'+y]=[];
                                        var occurr= findOccurrences(res,l)
                                        //console.log(occurr);
                                        for(var n=0;n<occurr.length;n++)
                                            messageKeys[x+':'+y].push(occurr[n]);
                                    }
                                    else
                                        chartSeries.series[yAxisCounter].addPoint([x, y], true, true);
                                    //console.log(result.indexOf(l)!=-1);
                                }
                                else{
                                    $(el).unbind();
                                    clearInterval(timer);
                                }
                            }
                            it++;
                            l++;
                        }, 1000);
                    }
                    else{
                        $(el).unbind();
                        clearInterval(timer);
                    }
                }
            }
        },
        credits: {
            enabled: false
        },
        yAxis:{

            title: {
                text: yAxis
            }
        },
        tooltip: {
            formatter: function () {
                var s = '<b>' + Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '</b>';
                $.each(this.points, function (i, point) {
                    var t=yAxis[i];
                    var color1 =  point.series.color;
                    if(label!="")
                        t=tooltips["'"+this.x+point.y+"'"];
                    if(resXY.indexOf(this.x+':'+point.y)!=-1) {
                        color1='red';
                        //console.log(i);
                        for (var oc=0;oc<messageKeys[this.x+':'+point.y].length;oc++)
                            s += '<br/><span style="color:red">Alert Message: </span>'+ msgs[messageKeys[this.x+':'+point.y][oc]] ;
                    }
                    s += '<br/><span style="color:'+color1+'">'+ t +': </span>'+ point.y ;
                });
                return s;
            }
        },
        title: {
            text: aggregationText
        },
        rangeSelector: {
            buttons: [{
                count: 1,
                type: 'minute',
                text: '1M'
            }, {
                count: 5,
                type: 'minute',
                text: '5M'
            }, {
                type: 'all',
                text: 'All'
            }],
            inputEnabled: false
        },
        series: seriesFinal
    };
    $(el).highcharts('StockChart',chartOptions);
}
function singleMapAlerts(lat,lng,alertName,dateGenerated,message){
    utils.singleMapAlerts(lat,lng,alertName,dateGenerated,message);
}

///////////////////////////////////////Compare Multiple Series///////////////////////////////////
function compareMultipleSeries(data, el, xAxis, yAxis, label,aggregationText){
    //var docs = $.parseJSON(data[0].docs);
    if(label.length<yAxis.length){
        for(var t=label.length;t<yAxis.length;t++){
            label.push("");
        }
    }
    var docs = data;
    var series2 = [];
    for(var j=0;j<yAxis.length;j++)  {
        series2[yAxis[j]]= [];
    }
    var tooltips = [];
    for (var i=0;i<docs.length;i++){
        var datetime =  new Date(parseInt(docs[i][xAxis]));
        var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
        for(var t=0;t<yAxis.length;t++){
            if(!isNaN(docs[i][yAxis[t]])){
                series2[yAxis[t]].push([timestamp,parseFloat(docs[i][yAxis[t]])]);
                if(!isNaN(docs[i][label[0]])){
                    tooltips["'"+timestamp+parseFloat(docs[i][yAxis[t]])+label[0]+"'"]=[];
                    tooltips["'"+timestamp+parseFloat(docs[i][yAxis[t]])+label[0]+"'"].push(parseFloat(docs[i][label[0]]));
                }
                else if(isNaN(docs[i][label[0]])){
                    tooltips["'"+timestamp+parseFloat(docs[i][yAxis[t]])+label[0]+"'"] = [];
                    tooltips["'"+timestamp+parseFloat(docs[i][yAxis[t]])+label[0]+"'"].push((docs[i][label[0]]));
                }
            }
            else{

                series2[yAxis[t]].push([timestamp,0]);
                if(label[0]!=""){
                    if(!isNaN(docs[i][label[0]])) {
                        tooltips["'"+timestamp+0+label[0]+"'"]=[];
                        tooltips["'"+timestamp+0+label[0]+"'"].push(parseFloat(docs[i][label[0]]));
                    }
                    else if(isNaN(docs[i][label[0]])){
                        tooltips["'"+timestamp+0+label[0]+"'"]=[];
                        tooltips["'"+timestamp+0+label[0]+"'"].push((docs[i][label[0]]));
                    }
                }
            }
        }
    }
    //console.log((label=="")?yAxis:label);
    var chartOptions={
        chart: {},
        yAxis: {
            /*labels: {
                formatter: function() {
                    return (this.value > 0 ? '+' : '') + this.value + '%';
                }
            },
             plotLines: [{
             value: 0,
             width: 2,
             color: 'silver'
             }]*/
            title: {
                text: yAxis
            }

        },
        title:{
            text:(aggregationText==""||typeof aggregationText=="undefined")?'':aggregationText
        },
        legend: {
            enabled: true
        },
        credits: {
            enabled: false
        },
        tooltip: {
            formatter: function () {
                var s = '<b>' + Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '</b>';
                $.each(this.points, function (i, point) {
                    var t=yAxis[i];
                    if(label!="")
                        t=tooltips["'"+this.x+point.y+label[0]+"'"];
                    s += '<br/><span style="color:'+point.series.color+'">'+ t +': </span>'+ point.y ;
                });
                return s;
            }
        },
        rangeSelector: {
            enabled: false
        },
        series: [{name:yAxis[0],data:series2[yAxis[0]]}]
    };
    $(el).highcharts('StockChart',chartOptions);
    var chart = $(el).highcharts();
    for(var g=1;g<yAxis.length;g++){
        //console.log(series2[yAxis[g]])
        chart.addSeries({
            name: yAxis[g],
            data: series2[yAxis[g]]
        });
    }


}
/////////////////////////////////////////////////////Stack Column///////////////////////////
function stackGraph(data,divId,xAxis,yAxis,label){
    if(typeof data != "undefined")
        displayStackGraph(divId,label,xAxis,yAxis,data);

}
function stackGraphXValues(divId,ids,xs,ys,data) {

    var lables = ids[0];
    var graphSeries =[];
    var yAxisLabels =[];
    var xValues= [];
    var docs = data;
    for (var i=0;i<docs.length;i++){

        if(!checkXisValueExists(xValues,docs[i][xs])){
            xValues.push(docs[i][xs]);
        }
    }
    xValues = xValues.sort();
    var labelNames = [];
    for (var i=0;i<docs.length;i++){
        if(!checkXisValueExists(labelNames,docs[i][lables])){
            labelNames.push(docs[i][lables]);
        }
    }
    labelNames = labelNames.sort();
    var graphData = [];

    for(var i=0;i<labelNames.length;i++){
        var name = labelNames[i];
        var dataObj = [];
        for(var j=0;j<xValues.length;j++){
            var dataValue = setDataValue(data,name,xValues[j],lables,xs,ys);
            if(dataValue == 'na'){
                dataValue = null;
            }else{
                dataValue = parseInt(dataValue);
            }
            dataObj.push(dataValue);
        }
        graphData.push({name:name,data:dataObj});
    }

    $(function () {
        $(divId).highcharts({
            chart: {
                zoomType: 'x',
                type: 'column'
            },
            credits: {
                enabled: false
            },
            title: {
                text:($('#aggregationList :selected').text() == 'Select')?"":$('#aggregationList :selected').text()
            },
            xAxis: {
                categories:xValues
            },
            yAxis: {
                min: 0,
                title: {
                    text: ys
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },

            tooltip: {
                formatter: function () {
                    var s = '<b>' + /*Highcharts.dateFormat('%A, %b %e, %Y', this.x)*/ + '</b><br/>';
                    s+=  this.series.name +': '+ this.y +'<br/>'+
                        'Total: '+ this.point.stackTotal;
                    return s;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: graphData
        });
    });
}
function setDataValue(data,name,xVal,labField,xField,yField){
    for(var k=0;k<data.length;k++){
        if(data[k][xField] == xVal && data[k][labField] == name){
            return data[k][yField];
            break;
        }
    }
    return 'na';
}
function checkXisValueExists(array,key){
    if(array.length>0){
        for(var i=0;i<array.length;i++){
            if(array[i] == key){
                return true;
            }
        }
    }
    return false;
}
function displayStackGraph(divId,ids,xs,ys,data) {
    //console.log(ids);
    var graphSeries =[];
    var yAxisLabels =[];
    var key=[];
    var tempYAxisLabels = [];
    var hitRate = [];
    for(var l=0;l<ids.length;l++)
        graphSeries[ids[l]] = [];
    for(var l=0;l<ids.length;l++)
        tempYAxisLabels[ids[l]] = [];
    var xValues= [];

    var docs = data;

    var skipFirst=false;

    for (var i=0;i<docs.length;i++){



        var datetime =  new Date(parseInt(docs[i]['timestamp']));
        var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());

        //   console.log("Original timestamp : " + docs[i][xs] + " , Converted : " + timestamp);

        for(var p=0;p<ids.length;p++){
            if(!isNaN(docs[i][ids[p]])){
                graphSeries[ids[p]].push([timestamp,parseInt(docs[i][ids[p]])]);

            }
            else if(isNaN(docs[i][ids[p]]))  {
                if(key.indexOf(ids[p])==-1)
                    key.push(ids[p]);
                //graphSeries[ids[p]].push([timestamp,(docs[i][ids[p]])]);
                tempYAxisLabels[ids[p]].push(docs[i][ids[p]]);
            }

            if(!isNaN(docs[i][ys]))
                hitRate.push(parseInt(docs[i][ys]));
            else
                hitRate.push(0);

        }
        xValues.push(timestamp);

    }
    console.log(hitRate.length);
    for(var t=0;t<key.length;t++)
        yAxisLabels[key[t]] = [];
    for (var t=0;t<key.length;t++){
        yAxisLabels[key[t]] = findUnique(tempYAxisLabels[key[t]]);
        graphSeries[key[t]] = mapTextToNumeric(yAxisLabels[key[t]],tempYAxisLabels[key[t]],xValues);
        for(var f=1;f<yAxisLabels[key[t]].length;f++){
            graphSeries[yAxisLabels[key[t]][f]] = [];
            for(var b=0;b<graphSeries[key[t]].length;b++){
                if(yAxisLabels[key[t]].indexOf(yAxisLabels[key[t]][f])== yAxisLabels[key[t]].indexOf(tempYAxisLabels[key[t]][b]))
                    graphSeries[yAxisLabels[key[t]][f]].push([xValues[b],hitRate[b]]);
                else{
                    graphSeries[yAxisLabels[key[t]][f]].push([xValues[b],0]);
                }
            }
        }
    }

    var dataSeries=[];
    console.log(graphSeries.length);
    for (var key in graphSeries)
    {

        if(key=="DC_Errors:errorType")
            continue;
        dataSeries.push({
            name:key,
            data:graphSeries[key]
        });



    }

    $(function () {
        $(divId).highcharts({
            chart: {
                zoomType: 'x',
                type: 'column'
            },
            credits: {
                enabled: false
            },
            title: {
                text:$('#aggregationList :selected').text()
            },
            xAxis: {
                //                   categories:xValues,
                type: 'datetime'
            },
            yAxis: {
                min: 0,
                title: {
                    text: ys
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: 0,
                verticalAlign: 'bottom',
                y: -11,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false

            },
            tooltip: {
                formatter: function () {
                    var s = '<b>' + Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '</b><br/>';
                    s+=  this.series.name +': '+ this.y +'<br/>'+
                        'Total: '+ this.point.stackTotal;
                    return s;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },
            series: dataSeries
        });
    });

}
///////////////////////////////////////////Time Series Area///////////////////////////////
function timeAreaGraph(data, el, xAxis, yAxis, label){
    var docs = data; //$.parseJSON(response_data[0].docs);
    if(typeof docs == "undefined")
        return;
    var series = [];
    var tooltipKeyword = [];
    var keyword= label;
    for(var y=0;y<yAxis.length;y++){
        var data = [];
        tooltipKeyword[yAxis[y]] = [];
        for(var i=0; i < docs.length;i++ ){
            var record = docs[i];
            var datetime =  new Date(parseInt(record[xAxis]));
            var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
            if( record[yAxis[y]]==""){
                tooltipKeyword[yAxis[y]]["0"] = [];
                tooltipKeyword[yAxis[y]]["0"].push(record[keyword]);
                data.push([timestamp,0]);
            }else if(isNaN(parseFloat(record[yAxis[y]]))== false){
                tooltipKeyword[yAxis[y]][timestamp+parseFloat(record[yAxis[y]])] = [];
                tooltipKeyword[yAxis[y]][timestamp+parseFloat(record[yAxis[y]])].push(record[keyword]);
                data.push([timestamp,parseFloat(record[yAxis[y]])]);
            }else{
                tooltipKeyword[yAxis[y]]["0"] = [];
                tooltipKeyword[yAxis[y]]["0"].push(record[keyword]);
                data.push([timestamp,0]);
            }
        }
        series.push({name:yAxis[y],data:data});
    }
    var options = {
        chart: {
            type:'area'
        },
        credits: {
            enabled: false
        },
        title: {
            text: $('#aggregationList :selected').text()
        },
        yAxis:{
            title: {
                text: yAxis
            }
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        legend: {
            enabled: true
        },
        tooltip: {
            formatter: function () {
                var s = '<b>' + Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '</b>';
                $.each(this.points, function (i, point) {
                    var t=yAxis[i];
                    if(label!=""){
                        t=tooltipKeyword[yAxis[i]][this.x+this.y];
                        s += '<br/><span style="color:'+point.series.color+'">'+ t +': </span>'+ point.y ;
                    }else{
                        s += '<br/><span style="color:'+point.series.color+'">'+ t +': </span>'+ point.y ;
                    }
                });
                return s;
            }
        },
        rangeSelector:{
            enabled:false
        },
        series: series
    };
    $(el).highcharts('StockChart',options);
}

///////////////////////////////Multiple Axis Graph//////////////////////////////
function multiAxisGraph(data,el,xAxis,yAxis,aggregationText){

    var docs = data;
    var xAxisValues = [];
    var yAxisValues = [];
    console.log("==============data=================");
    console.log(docs);
    console.log("===================xAxis================");
    console.log(xAxis);
    console.log("===================yAxis=====================");
    console.log(yAxis);
    console.log("========================aggregationText=================");
    console.log(aggregationText);

    for (var k=0; k<docs.length; k++){
        var obj = docs[k];
        /*var datetime =  new Date(parseInt(obj[xAxis]));
         var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());*/
        for (var prop in obj) {
            if(obj.hasOwnProperty(prop)){
                //console.log(obj[xAxis])
                //alert(prop + " = " + obj[prop]);

                var datetime =  new Date(parseInt(obj[xAxis]));
                var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());

                xAxisValues[k] = timestamp;
                yAxisValues[k] = parseFloat(obj[yAxis]) * 100;
            }
        }

    }
    console.log("============xAxisValues==============");
    console.log(xAxisValues);
    console.log("====================yAxisValues===============");
    console.log(yAxisValues);


    $(function () {
        $(el).highcharts({
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: 'Average Monthly Weather Data for Tokyo'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: [{
                //categories: timestamp
                type: 'datetime'
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    formatter: function() {
                        return this.value +'°C';
                    },
                    style: {
                        color: '#89A54E'
                    }
                },
                title: {
                    text: 'Temperature',
                    style: {
                        color: '#89A54E'
                    }
                },
                opposite: true

            }, { // Secondary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Rainfall',
                    style: {
                        color: '#4572A7'
                    }
                },
                labels: {
                    formatter: function() {
                        return this.value +' mm';
                    },
                    style: {
                        color: '#4572A7'
                    }
                }

            }, { // Tertiary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Sea-Level Pressure',
                    style: {
                        color: '#AA4643'
                    }
                },
                labels: {
                    formatter: function() {
                        return this.value +' mb';
                    },
                    style: {
                        color: '#AA4643'
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 80,
                floating: true,
                backgroundColor: '#FFFFFF'
            },
            series: [{
                name: 'Rainfall',
                color: '#4572A7',
                type: 'column',
                yAxis: 1,
                data: yAxisValues,
                tooltip: {
                    valueSuffix: ' mm'
                }

            }, {
                name: 'Sea-Level Pressure',
                type: 'spline',
                color: '#AA4643',
                yAxis: 2,
                data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
                marker: {
                    enabled: false
                },
                dashStyle: 'shortdot',
                tooltip: {
                    valueSuffix: ' mb'
                }

            }, {
                name: 'Temperature',
                color: '#89A54E',
                type: 'spline',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                tooltip: {
                    valueSuffix: ' °C'
                }
            }]
        });
    });
}



function getDynaTreeJSON(root,obj){


    if(root.hasChildren()){

        var children = root.getChildren();
        for(var i= 0; i <children.length; i++){
//            console.log(children[i].data);

            var data = children[i].data;
            var newData = {};
            newData.title = data.title;
            newData.key = data.key;
            newData.isFolder = data.isFolder;
            newData.nodeType = data.nodeType;

            if(typeof data.position !=="undefined"){
                newData.position = data.position;
            }
            if(typeof data.val_position !=="undefined"){
                newData.val_position = data.val_position;
            }
            if(typeof data.category !=="undefined"){
                newData.category = data.category;
            }
            if(typeof data.data_definition_name !=="undefined"){
                newData.data_definition_name = data.data_definition_name;
            }
            if(typeof data.data_definition_id !=="undefined"){
                newData.data_definition_id = data.data_definition_id;
            }
            if(typeof data.isSchema !=="undefined"){
                newData.isSchema = data.isSchema;
            }
            if(typeof data.isSource !=="undefined"){
                newData.isSource = data.isSource;
            }
            if(typeof data.path !=="undefined"){
                newData.path = data.path;
            }
            if(typeof data.data_source_id !=="undefined"){
                newData.data_source_id = data.data_source_id;
            }
            if(typeof data.dataType !=="undefined"){
                newData.dataType = data.dataType;
            }
            if(typeof data.alias !=="undefined"){
                newData.alias = data.alias;
            }
            if(typeof data.index !=="undefined"){
                newData.index = data.index;
            }
            if(typeof data.is_mapped !=="undefined"){
                newData.is_mapped = data.is_mapped;
            }
            if(typeof data.mapped_from !=="undefined"){
                newData.mapped_from = data.mapped_from;
            }

            newData.children = [];

            obj.children.push(getDynaTreeJSON(children[i],newData));
        }

    }
    else{

//        console.log(root.data);
        obj.children = [];

    }
    return obj;
}

function getPermissions(moduleName){

//    console.log(localStorage.getItem('permissions'));
    var allPermissions = $.parseJSON(localStorage.getItem('permissions'));
    if(typeof moduleName == "undefined"){

        var modules = [];
        $.each(allPermissions,function(index,permissionObject){
            modules.push(permissionObject.module_name);
        });
        return modules;
    }else{

        var permission = "No module found against \"" + moduleName + "\"";

        for(var i=0; i < allPermissions.length; i++ ){
            if(utils.trimWhiteSpaces(allPermissions[i].module_name).toLowerCase() == utils.trimWhiteSpaces(moduleName).toLowerCase()){
                permission = {};
                permission._id = allPermissions[i]._id;
                permission.module_id = allPermissions[i].module_id;
                permission.module_name = allPermissions[i].module_name;
                permission.operations = $.parseJSON(allPermissions[i].operations);
                break;
            }
        }
        return permission;
    }
}

function getAllowedOperations(module){
    if(typeof module != 'undefined' ){

        var allPermissions = $.parseJSON(localStorage.getItem('permissions'));
//        console.log(allPermissions);
        var operations = [];
        for(var i=0; i < allPermissions.length; i++ ){
            if(utils.trimWhiteSpaces(allPermissions[i].module_name).toLowerCase() == utils.trimWhiteSpaces(module).toLowerCase()){
                var operationObjects = allPermissions[i].operations;
                for(var i=0; i < operationObjects.length; i++ ){
                    operations.push(operationObjects[i].name);
                }
                break;
            }
        }
        return operations;
    }
    return [];
}
function getUserProfile(){

    var profile = {};
    profile.name = localStorage.getItem('name');
    profile.email = localStorage.getItem('email');
    profile.role_id = localStorage.getItem('role_id');

    return profile;
}
function hasPermissions(module,operation){

    if(typeof module != "undefined"){

        if(typeof operation != 'undefined'){

            return ( getAllowedOperations(module).indexOf(operation) != -1 );

        }
        else{
            return ( getPermissions().indexOf(module) != -1 );
        }
    }
    return false;
}


/* Analytical graphs*/
function scatterRegressionPlot(yAxis,xMin,xMax,rMin,rMax,label,el,xTitle,yTitle,subTitle,graphLabel){
    var options = {
        chart: {
        },
        credits: {
            enabled: false
        },
        xAxis: {
            min: xMin,
            max: xMax,
            title: {
                text: xTitle
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: yTitle
            }
        },
        title: {
            text: label
        },

        subtitle: {
            text: subTitle,
            x: -20
        },
        series: [{
            type: 'line',
            name: 'Regression Line',
            data: [[xMin, rMin], [xMax, rMax]],
            marker: {
                enabled: false
            },
            states: {
                hover: {
                    lineWidth: 0
                }
            },
            enableMouseTracking: false
        }, {
            type: 'scatter',
            name: 'Observations',
            data: yAxis,
            marker: {
                radius: 5
            },
            tooltip: {
                headerFormat: '',
                pointFormat: graphLabel.x+':<b>{point.x}</b><br>'+graphLabel.y+':<b>{point.y}</b>'
            }
        }]
    };
    $(el).highcharts(options);
}
function scatterMultipleRegressionPlot(yAxis,xAxis,label,el,xTitle,yTitle,subTitle){
    var colors = Highcharts.getOptions().colors;
    var data = [];
    for(var i=0;i<xAxis.length;i++){
        data.push({x:xAxis[i],y:yAxis[i],color:colors[i]});
    }

    var options = {
        chart: {
            type: 'scatter'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            title: {
                enabled: true,
                text: xTitle
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: yTitle
            }
        },
        title: {
            text: label
        },
        subtitle: {
            text: subTitle,
            x: -20
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '<b>'+xTitle+':</b>{point.x}<br><b>'+yTitle+':</b>{point.y}'
        },
        series: [{
            name: 'Observations',
            data: data
        }]
    };
    $(el).highcharts(options);
}
function scatterCorrelationPlot(data,label,el,xTitle,yTitle,subTitle,graphLabel){
    var options = {
        chart: {
            type: 'scatter'
        },
        credits: {
            enabled: false
        },
        title: {
            text: ''
        },
        subtitle: {
            text: subTitle,
            x: -20
        },
        xAxis: {
            title: {
                enabled: true,
                text: xTitle
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: yTitle
            }
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: graphLabel.x+':<b>{point.x}</b><br>'+graphLabel.y+':<b>{point.y}</b>'
                }
            }
        },
        legend: {
            enabled:false
        },
        series: [{
            data:data
        }]
    };
    $(el).highcharts(options);
}
function cumulativeFrequencyPlot(xArray,cumulativeFrequency,el,xTitle,yTitle,label,graphsLabel){

    var data =[];
    for(var i=0;i<xArray.length;i++){
        data.push({x:xArray[i],y:cumulativeFrequency[i]});
    }
    var newArray = sortedArray(data);
    var xNew = [];
    var columNew = [];
    var graphData = [];
    for(var i=0;i<newArray.length;i++){
        xNew.push(newArray[i].x);
        columNew.push(newArray[i].y);
        var cols = [];
        cols.push(newArray[i].x);
        cols.push(newArray[i].y);
        graphData.push(cols);
    }

    var options =  {
        title: {
            text: label
        },
        credits: {
            enabled: false
        },
        xAxis: {
            title: {
                text: xTitle
            }
        },
        yAxis: {
            title: {
                text: yTitle
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '<b>X</b>-'+graphsLabel.X+':<b>{point.x}</b><br><b>Y</b>-'+graphsLabel.Y+':<b>{point.y}</b>'
        },
        legend: {
            enabled: false
        },
        series: [{
            data: graphData
        }]
    };
    $(el).highcharts(options);
}
function sortedArray(data){
    data.sort(function (a, b) {
        if (a.x > b.x) {
            return 1;   //return any +ve values
        } else if (a.x < b.x) {
            return -1;  // return any -ve values
        } else {
            return 0;  // return zero for equal values
        }
    });
    return data;
}
function distributiveFrequencyPlot(xArray,distributiveFrequency,el,xTitle,yTitle,label,graphLabel){

    var data =[];
    for(var i=0;i<xArray.length;i++){
        data.push({x:xArray[i],y:distributiveFrequency[i]});
    }
    var newArray = sortedArray(data);
    var xNew = [];
    var columNew = [];
    var graphData = [];
    for(var i=0;i<newArray.length;i++){
        xNew.push(newArray[i].x);
        columNew.push(newArray[i].y);
        var cols = [];
        cols.push(newArray[i].x);
        cols.push(newArray[i].y);
        graphData.push(cols);
    }


    var options =  {
        title: {
            text: label
        },
        credits: {
            enabled: false
        },
        xAxis: {
            title: {
                text: xTitle
            }
        },
        yAxis: {
            title: {
                text: yTitle
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '<b>X</b>-'+graphLabel.x+':{point.x}<br><b>Y</b>-'+graphLabel.y+'<b>{point.y}</b>'
        },
        legend: {
            enabled: false
        },
        series: [{
            data: graphData
        }]
    };
    $(el).highcharts(options);
}
function histogramsPlot(binX,binFrequency,el,xTitle,yTitle,label,graphLabel){
    var colors = Highcharts.getOptions().colors;
    var counter = -1;
    var data = [];
    for(var i=0;i<binFrequency.length;i++){
        data.push({y:binFrequency[i],color:colors[i]});
    }
    //{x:timestamp,y:0,color:color}
    var options = {
        chart: {
            type: 'column'
        },
        credits: {
            enabled: false
        },
        title: {
            text: label
        },
        xAxis: {
            categories: binX,
            title:{
                text: xTitle
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: yTitle
            }
        },
        tooltip: {
            formatter: function() {
                return '<b>X</b>-'+graphLabel.x+':<b>'+ this.x +'</b><br/><b>Y-</b>'+graphLabel.y +': <b>'+ this.y +'</b>';
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        legend: {
            enabled:false
        },
        series: [{
            data: data
        }]
    };
    $(el).highcharts(options);


}
function tTestPlot(binX,binFrequency,el,xTitle,yTitle,label,subTitle){
    var colors = Highcharts.getOptions().colors;
    var data = [];
    for(var i=0;i<binFrequency.length;i++){
        data.push({y:binFrequency[i],color:colors[i]});
    }
    //{x:timestamp,y:0,color:color}
    var options = {
        chart: {
            type: 'column'
        },
        credits:{
            enabled:false
        },
        title: {
            text: label
        },
        subtitle: {
            text: subTitle
        },
        xAxis: {
            categories: binX,
            title:{
                text: xTitle
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: yTitle
            }
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.x +'</b><br/><b>'+yTitle+'</b>: '+ this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        legend: {
            enabled:false
        },
        series: [{
            data: data
        }]
    };
    $(el).highcharts(options);

}
function roundNumber(number,decimal){
    var decimalPoint = 0;
    if(decimal == 1){decimalPoint = Math.round(number*10)/10;}
    else if(decimal == 2){decimalPoint = Math.round(number*100)/100;}
    else if(decimal == 3){decimalPoint = Math.round(number*1000)/1000;}
    else if(decimal == 4){decimalPoint = Math.round(number*10000)/10000;}
    else{
        decimalPoint =  Math.round(number);
    }
    return decimalPoint;
}
function statAnovaBox(xCategory,graphDataObject,el,xTitle,yTitle,label){
    var options = {
        chart: {
            type: 'boxplot'
        },
        credits: {
            enabled: false
        },
        title: {
            text: label
        },

        legend: {
            enabled: false
        },

        xAxis: {
            categories: xCategory,
            title: {
                text: 'Experiment No.'
            }
        },

        yAxis: {
            title: {
                text: 'Observations'
            },
            plotLines: [{
                value: 932,
                color: 'red',
                width: 1,
                label: {
                    text: 'Theoretical mean: 932',
                    align: 'center',
                    style: {
                        color: 'gray'
                    }
                }
            }]
        },

        series: [{
            name: 'Observations',
            data: graphDataObject/*[
             [760, 801, 848, 895, 965],
             [733, 853, 939, 980, 1080],
             [714, 762, 817, 870, 918],
             [724, 802, 806, 871, 950],
             [834, 836, 864, 882, 910]
             ]*/,
            tooltip: {
                headerFormat: '<em>Experiment No {point.key}</em><br/>'
            }
        }/*, {
         name: 'Outlier',
         color: Highcharts.getOptions().colors[0],
         type: 'scatter',
         data: [ // x, y positions where 0 is the first category
         [0, 644],
         [4, 718],
         [4, 951],
         [4, 969]
         ],
         marker: {
         fillColor: 'white',
         lineWidth: 1,
         lineColor: Highcharts.getOptions().colors[0]
         },
         tooltip: {
         pointFormat: 'Observation: {point.y}'
         }
         }*/]
    }
    $(el).highcharts(options);
}
function scatterRankedCorrelationPlot(yAxis,xAxis,label,el,xTitle,yTitle,subTitle){
    var colors = Highcharts.getOptions().colors;
    var data = [];
    for(var i=0;i<xAxis.length;i++){
        data.push({x:xAxis[i],y:yAxis[i],color:colors[i]});
    }

    var options = {
        chart: {
            type: 'scatter'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            title: {
                enabled: true,
                text: xTitle
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: yTitle
            }
        },
        title: {
            text: label
        },
        subtitle: {
            text: subTitle,
            x: -20
        },
        tooltip: {
            formatter: function() {
                var name =this.series.name;
                var tooltipHtml = '<b>'+xTitle+'</b>:'+Highcharts.numberFormat(this.point.x,2)+'<br><b>'+yTitle+'</b>:'+Highcharts.numberFormat(this.point.y, 2);
                return tooltipHtml;
            }
        },
        series: [{
            name: 'Observations',
            data: data
        }]
    };
    $(el).highcharts(options);
}
function trendLinePlot(xArray,yArray,trendLine,label,el,xTitle,yTitle,subTitle){
    var colors = Highcharts.getOptions().colors;
    var series = [];
    var trendData = [];
    var yData = [];
    var data = [];
    for(var i=0;i<xArray.length;i++){
        data.push({x:xArray[i],y:yArray[i],t:trendLine[i]});
    }
    var newData = sortTredLine(data,'x');
    for(var i=0;i<newData.length;i++){
        var y = [];
        var t = [];
        y.push(newData[i].x);
        y.push(newData[i].y);
        yData.push(y);

        t.push(newData[i].x);
        t.push(newData[i].t);
        trendData.push(t);
    }
    series.push({name:yTitle,data:yData,color:colors[2]});
    series.push({name:'Predicted',data:trendData,color:colors[3]});
    var options = {
        title: {
            text: label,
            x: -20 //center
        },
        credits: {
            enabled: false
        },
        subtitle: {
            text: subTitle,
            x: -20
        },
        xAxis: {
            title: {
                text: xTitle
            }
        },
        yAxis: {
            title: {
                text: yTitle
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },

        tooltip: {
            formatter: function() {
                var name =this.series.name;
                var tooltipHtml = '<b>'+xTitle+'</b>:'+Highcharts.numberFormat(this.point.x,2)+'<br><b>'+name+'</b>:'+Highcharts.numberFormat(this.point.y, 2);
                return tooltipHtml;
            }
        },
        series: series
    };
    $(el).highcharts(options);
}
function sortTredLine(array,x){
    array.sort(function (a, b) {
        if (a[x] > b[x]) {
            return 1;   //return any +ve values
        } else if (a[x] < b[x]) {
            return -1;  // return any -ve values
        } else {
            return 0;  // return zero for equal values
        }
    });
    return array;
}
function studentsTtest(xCategory,meanArray,stdArray,maxArray,minArray,obsArray,label,subTitle,el){
    var options = {
        chart: {
            type: 'column'
        },
        title: {
            text: label
        },
        credits:{
            enabled:false
        },
        subtitle: {
            text: subTitle
        },
        xAxis: {
            categories: xCategory
        },
        yAxis: {
            min: 0,
            title:{
                text:''
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px"><b>{point.key}</b></span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Mean',
            data: meanArray

        }, {
            name: 'Standard Deviation',
            data: stdArray

        }, {
            name: 'Maximum',
            data: maxArray

        }, {
            name: 'Minimum',
            data: minArray

        }, {
            name: 'Observations',
            data: obsArray

        }]
    };
    $(el).highcharts(options);
}
function chiSquareGraph(data,expectedTitle,observedTitle,chiTitle,lable,subTitle,el){
    var colors = Highcharts.getOptions().colors;
    var dataObserved = [];
    var dataChi = [];
    var graphData = [];
    var newData = sortTredLine(data,'expected');
    for(var i=0;i<newData.length;i++){
        var obsv = [];
        obsv.push(newData[i].expected);
        obsv.push(newData[i].observed);
        dataObserved.push(obsv);

        var chi = [];
        chi.push(newData[i].expected);
        chi.push(newData[i].chi);
        dataChi.push(chi);
    }
    graphData.push({name:observedTitle,type:'column',yAxis:1,data:dataObserved,color:colors[2],pointWidth: 20});
    graphData.push({name:chiTitle,type:'spline',data:dataChi,color:colors[3]});

    var options = {
        chart: {
            zoomType: 'xy'
        },
        credits:{
            enabled:false
        },
        title: {
            text: lable
        },
        subtitle: {
            text: subTitle
        },
        xAxis: [{

        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '',
                style: {
                    color: '#89A54E'
                }
            },

            title: {
                text: 'Temperature',
                style: {
                    color: '#FFFFFF'
                }
            }
        }, { // Secondary yAxis
            title: {
                text: '',
                style: {
                    color: '#4572A7'
                }
            },
            labels: {
                format: '',
                style: {
                    color: '#FFFFFF'
                }
            },
            opposite: true
        }],
        tooltip: {
            headerFormat: '<b>'+expectedTitle+':</b>{point.x}<br>',
            pointFormat: '<b>{series.name}:</b>' +'{point.y:.1f}<br>',
            shared: true
        },
        series: graphData
    };
    $(el).highcharts(options);
}
function mathematicalGraph(graphData,xTitle,yTitle,label,subTitle,el,gType){
    var data = graphData;// [];
    //var xisType = gType;

    var options ={
        chart: {
            type: 'scatter'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            title: {
                enabled: true,
                text: xTitle
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: yTitle
            }
        },
        title: {
            text: label
        },
        subtitle: {
            text: subTitle,
            x: -20
        },
        tooltip: {
            formatter: function() {
                var name =this.series.name;
                var tooltipHtml = '<b>'+xTitle+'</b>:'+Highcharts.numberFormat(this.point.x,2)+'<br><b>'+yTitle+'</b>:'+Highcharts.numberFormat(this.point.y, 2);
                return tooltipHtml;
            }
        },
        legend:{
            enabled:false
        },
        series: [{
            data: data
        }]
    };

    $(el).highcharts(options);
}
function sortMathematicsData(data,key){
    data.sort(function (a, b) {
        if(parseFloat(a[key]) > parseFloat(b[key])) {
            return 1;   //return any +ve values
        }else if (parseFloat(a[key]) < parseFloat(b[key])) {
            return -1;  // return any -ve values
        }else {
            return 0;  // return zero for equal values
        }
    });
    return data;
}
////////////////////////////////////////////HIerarchy Graph Code////////////////////////////////////
//////////////////////////////////////////////Code TO make hierarchical Graph Goes below/////////////////////////////////////

/*function HierarchyStart(data,levels){
 var w = 960,
 h = 800,
 i = 0,
 barHeight = 20,
 barWidth = w * .8,
 duration = 400,
 root;

 var tree = d3.layout.tree()
 .size([h, 200]);

 var diagonal = d3.svg.diagonal()
 .projection(function(d) { return [d.y, d.x]; });

 var vis = d3.select("#chart").append("svg:svg")
 .attr("width", w)
 .attr("height", h)
 .append("svg:g")
 .attr("transform", "translate(20,30)");



 console.log("service Jason");
 console.log(json);
 //json = getHirarichalData(data,['employe','city','country',])

 //var result =  groupByLevel(databa, [ "city","country", "employe"] );
 var result =  check(databa, ["employe","country"]);
 var yourJson = JSON.stringify(result);
 console.log("My Jason")
 console.log(result);
 var json=result;
 json.x0 = 0;
 json.y0 = 0;
 update(root = json);

 *//*d3.json("http://localhost:3030/getJason", function(json) {
 json.x0 = 0;
 json.y0 = 0;
 update(root = json);
 });
 *//*
 }*/

//////////////////////////////////////////////////////////////////////
//Recursive Functions

function check(source, levels)
{

    // var newData=jQuery.extend(true, {}, source);;
    var myArray = jQuery.extend(true, {}, source);;;

    var newData=[];
    $.each(myArray, function(key, value) {
        newData.push(value);
    });
    // var newData= source.slice(0);
    // var newData= source.concat();
    //alert(Object.keys(source[0]).length);
    //alert(levels.length);
    if(Object.keys(source[0]).length!=levels.length)
    {
        //check what keys are missing in levels array
        var marray=findMissing(newData,levels);
        /*console.log(newData)
         console.log("New DATA Length");
         console.log(newData.length);
         console.log("Marray Length");
         console.log(marray.length);*/
        //make new data according to levels array//delete keys which are not presnt in missing array
        //console.log("marray");
        // console.log(marray);
        remainingKeys=marray;
        for(var i=0;i<newData.length;i++)
        {
            //console.log("22");
            for(var j=0;j<marray.length;j++)
            {
                /*console.log("Marray");
                 console.log(marray[j]);
                 console.log("Data");*/
                //console.log(newData[i][marray[j]])

                delete newData[i][marray[j]];
                // console.log("hello");
            }
        }

        /*  console.log("New Data Now");
         console.log(newData);
         console.log("Before Data");
         console.log(source);
         console.log("Rejmaining Keys");
         console.log(remainingKeys);
         */
        return groupByLevel(newData, levels)
    }
    else
    {
        //groupByLevel(databa, ["city", "employe", "car"])
        return groupByLevel(source, levels)
    }
}
//function to find missing keys in level
function findMissing(newData,levels){
    var missing=[];
    var singleObj=newData[0];
    var flag=false;


    for(var key in singleObj)
    {
        //console.log(key)
        flag=false;
        for(var i=0;i<levels.length;i++)
        {
            if(key==levels[i])
            {
                flag=true;

            }
        }
        if(flag==false)
        {
            missing.push(key);
            //console.log(key)
        }

    }
    // console.log(missing);
    return missing;


}



function groupByLevel( source, levels, config ){

    config = ( typeof config == "object" && config ) || {};

    var internalConfig = {
        keyName: config.keyName || "name",
        collectionName: config.collectionName || "children"
    };

    var hierarchy = {};
    hierarchy[internalConfig.keyName] = "Hierarchy";
    hierarchy[internalConfig.collectionName] = source;

    var sourceArray = [hierarchy];

    for(var i = 0; i < levels.length; i++){

        var newSourceArray = [];

        for(var j = 0; j < sourceArray.length; j++){

            var oldArray = sourceArray[j][internalConfig.collectionName];
            var newArray = groupBy(oldArray, levels[i], internalConfig);
            /* console.log("newArray");
             console.log(newArray);*/
            sourceArray[j][internalConfig.collectionName] = newArray;
            for(var l = 0; l < newArray.length; l++){
                newSourceArray.push(newArray[l]);
            }
        }
        sourceArray = newSourceArray;
    }
    return hierarchy;
}
function groupByLevelRemaining( source, levels, config ){
    /* <li><a href="#">Home</a> <span class="divider">/</span></li>
     <li><a href="#">Library</a> <span class="divider">/</span></li>
     <li class="active">Data</li>*/




    var finalData=[];
    for(var i = 0; i < levels.length; i++){

        var newSourceArray = [];
        //  console.log("DATA Result")
        //  console.log(source);
        var remData=[];
        for(var j = 0; j < source.length; j++){

            remData.push(source[j][levels[i]])
        }

        //hierarchy;
        finalData.push({name:levels[i],values:remData})
    }
    // console.log("Final Data")
    // console.log(finalData);

    return finalData;

}

function duplicate(obj){
    var newObj = {};
    for(var i in obj) newObj[i] = obj[i];
    return newObj;
}

function objlength(obj){
    var length = 0;
    for(var i in obj) length++;
    return length
}

function groupBy(array, key, config){
    var group = {};
    var objKeyName="";
    /*console.log("key")
     console.log(key);*/
    for(var i = 0; i < array.length; i++){
        objKeyName=array[i];

        // console.log("Array");
        // console.log(array);
        var item = array[i];
        var currentKey = item[key];

        if( ! group[currentKey] ) group[currentKey] = [];

        var clone = duplicate(item);
        delete clone[key];
        if( objlength(clone) )
        {   // console.log("clone");
            //  console.log(clone);

            /*   console.log(_.keys(clone)[0]);
             objKeyName=_.keys(clone)[0];
             console.log(objKeyName);*/
            group[currentKey].push( clone );

        }

    }
    var returnGroup = [];
    //   console.log("G R O U P");
    //   console.log(group);
    for(var i in group){
        var groupItem = {};
        groupItem[config.keyName] = i;
        groupItem.KeyName = key;
        //  console.log(objKeyName);
        // console.log("Group ITem");
        //console.log(groupItem);

        if( group[i].length ) groupItem[config.collectionName] = group[i];
        returnGroup.push( groupItem );
    }
    return returnGroup;
}

//////////////////////////////////////////////////////////////////////

function update(source,root) {
    /*

     console.log("tree ssdsd");
     console.log(hieTree);
     */

    var w = 960,
        h = 800,
        i = 0,
        barHeight = 20,
        barWidth = w * .8,
        duration = 400;
    /* console.log("HIWE");
     console.log(hieRoot);
     */
    // Compute the flattened node list. TODO use d3.layout.hierarchy.
    var nodes = hieTree.nodes(hieRoot);

    // Compute the "layout".
    nodes.forEach(function(n, i) {
        n.x = i * barHeight;
    });

    // Update the nodes…
    var node = vis.selectAll("g.node")
        .data(nodes, function(d) { return d.id || (d.id = ++i); });

    var nodeEnter = node.enter().append("svg:g")
        .attr("class", "node")
        .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
        .style("opacity", 1e-6);

    // Enter any new nodes at the parent's previous position.
    nodeEnter.append("svg:rect")
        .attr("y", -barHeight / 2)
        .attr("height", barHeight)
        .attr("width", barWidth)
        .style("fill", color)
        .on("click", click);

    nodeEnter.append("svg:text")
        .attr("dy", 3.5)
        .attr("dx", 5.5)
        .text(function(d) {
            /* console.log("D D D D");
             console.log(d);*/
            var remString="";
            /*   for(var loop=0;loop<remainingKeys.length;loop++)
             {
             remString=remString+'  |  '+remainingKeys[loop];
             }*/
            for(var loop=0;loop<remainingKeysData.length;loop++)
            {
                remString=remString+'  |  '+remainingKeysData[loop].name+"  :";
                for(var j=0;j<remainingKeysData[loop].values.length;j++)
                {
                    remString=remString+remainingKeysData[loop].values[j]+" , "
                }
            }

            if(d.children!=undefined)
            {

                return d.name+"::"+d.children.length;
            }
            else
            {

                return d.KeyName+":"+d.name+"  "+remString;
                /*   console.log("D D D D");
                 console.log(d);*/
            }
        }).style("color", 'red');;

    // Transition nodes to their new position.
    nodeEnter.transition()
        .duration(duration)
        .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
        .style("opacity", 1);

    node.transition()
        .duration(duration)
        .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
        .style("opacity", 1)
        .select("rect")
        .style("fill", color);

    // Transition exiting nodes to the parent's new position.
    node.exit().transition()
        .duration(duration)
        .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
        .style("opacity", 1e-6)
        .remove();

    // Update the links…
    var link = vis.selectAll("path.link")
        .data(hieTree.links(nodes), function(d) { return d.target.id; });

    // Enter any new links at the parent's previous position.
    link.enter().insert("svg:path", "g")
        .attr("class", "link")
        .attr("d", function(d) {
            var o = {x: source.x0, y: source.y0};
            return diagonal({source: o, target: o});
        })
        .transition()
        .duration(duration)
        .attr("d", diagonal);

    // Transition links to their new position.
    link.transition()
        .duration(duration)
        .attr("d", diagonal);

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
        .duration(duration)
        .attr("d", function(d) {
            var o = {x: source.x, y: source.y};
            return diagonal({source: o, target: o});
        })
        .remove();

    // Stash the old positions for transition.
    nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });
}

// Toggle children on click.
function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
        //alert("I have Child");
        //onsole.log(d.children);
        // console.log(d);
    } else {
        d.children = d._children;
        d._children = null;
        //alert("I have no childrens");
        var n=d3.select(this);
        n.html('<p>hello oye</p>');
    }
    update(d);
}

function color(d) {
    //dark blue               //blue        //skin
    return d._children ? "#3182bd" : d.children ? "#c6dbef" : "#fd8d3c";
}
////////////////////////////////////////////HIerarchy Graph Code////////////////////////////////////
function uniqueFieldsData(data,field){
    var uniqueArray = [];

    for(var i=0;i<data.length;i++){
        if(i > 0){
            var keword = data[i][field];
            if(!checkUniqueExists(uniqueArray,keword)){
                uniqueArray.push(keword);
            }
        }
    }
    return uniqueArray;
}
function checkUniqueExists(array,key){
    if(array.length>0){
        for(var i=0;i<array.length;i++){
            if(array[i] == key){
                return true;
                break;
            }
        }
    }else{
        return false;
    }
    return false;
}



function aggregationSummaryGraph(dataObject,costTitle,priceTitle,label,el,colors){
    var xCategory = [];
    var cost = [];
    var sales = [];
    for(var i=0;i<dataObject.length;i++){
        for(var key in dataObject[i]){
            var name = key;
            xCategory.push(name);
            var nameObject = dataObject[i][key];
            cost.push(nameObject[costTitle]);
            sales.push(nameObject[priceTitle]);
        }
    }
    var options = {
        chart: {
            type: 'column',
            zoomType: 'xy'
        },
        title: {
            text: label
        },
        credits:{
            enabled:false
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: xCategory
        },
        yAxis: {
            min: 0,
            title:{
                text:''
            }
        },
        tooltip: {
            headerFormat: '<table><tr><td style="padding:0; text-align: left;" colspan="2"><b>{point.key}</b></td></tr>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +'<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                dataLabels: {
                    enabled: true
                },
                borderWidth: 0
            }
        },
        series: [{
            name: costTitle,
            data: cost,
            color:colors[0]

        }, {
            name: priceTitle,
            data: sales,
            color:colors[1]

        }]
    };
    $(el).highcharts(options);
}
///////////////////////////////////new Bar graph//////////////
function findUnique1(arr,key){
    var unique = [];
    for(var j=0;j<arr.length;j++){
        if(unique.indexOf(arr[j][key])==-1){
            unique.push(arr[j][key]);
        }
    }
    return unique;
}
function generateSeries(data,xs,ys){
    var series = [];
    for(var i=0;i<ys.length;i++){
        series[ys[i]] = [];
        for(var t=0;t<data.length;t++){
            series[ys[i]].push([xs[t],parseInt(data[t][ys[i]])]);
        }
    }
    return (series);
}
function barGraph1(data,el,yaxis,xaxis,aggregationText){

    var docs = data;
    // docs = docs.slice(0,20);
    var xs=findUnique1(docs,xaxis);
    /*console.log(xs);*/
    var filtered = generateSeries(docs,xs,yaxis);
    /*console.log(filtered);*/
    var seriesFinal = [];
    var yAxisText = '';
    for(var g=0;g<yaxis.length;g++){
        var yTitlte = '';
        if(yaxis[g] == 'Cost_Sum'){
            yTitlte = 'Cost';
        }else if(yaxis[g] == 'Product_Price_Sum'){
            yTitlte = 'Sale';
        }else{
            yTitlte = yaxis[g];
        }
        seriesFinal.push({
            name : yTitlte,
            data: filtered[yaxis[g]]
        });
        yAxisText +=yTitlte+'/';
    }
    yAxisText = yAxisText.slice(0,-1);
    /*console.log(seriesFinal);*/


    var chartOptions={
        chart: {
            type: 'column',
            zoomType: 'x'
        },
        xAxis: {
            /*categories : xs*/
            type: 'category',
            labels: {
                rotation:30,
                align: 'top'
            }
        },
        yAxis:{
            title: {
                text: yAxisText
            }
        },
        tooltip:{
            shared:true
        },
        title: {
            text: aggregationText
        },
        series: seriesFinal,
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            borderWidth: 2,
            y: 40
        },
        credits:{
            enabled:false
        },

        plotOptions:{
            pointPadding:0,
            column:{
                dataLabels:{
                    enabled:false
                },
                borderWidth:0
            }

        }
    };
    $(el).highcharts(chartOptions);
}

var dataObjectKewords = [
    { "comcast internet plans":{Sale:4650,Cost:2980}},
    {"comcast":{Sale:99800,Cost:17986}},
    {"comcast internet":{Sale:42590,Cost:52878}}
];

var dataObjectCompaign =[
    {"Comcast Mid Tier Performers":{Sale:5140,Cost:3851}},
    {"Comcast - Seed Terms":{Sale:100250,Cost:18266}},
    {"Comcast - Top Performers":{Sale:20740,Cost:25782}}
];

var dataObjectAddGroup =[
    {"Internet Comcast Internet Plans":{Sale:4650,Cost:2980}},
    {"Cable - Comcast Cable":{Sale:13030,Cost:17720}},
    {"Seed - Comcast":{Sale:100250,Cost:18266}}
];

var dataObjectCountry =[
    {"United States of America":{Sale:215511,Cost:154420}},
    {"Puerto Rico":{Sale:940,Cost:567}},
    {"Philippines":{Sale:250,Cost:57}}
];

var dataObjectStates =[
    {"California":{Sale:29160,Cost:19841}},
    {"Florida":{Sale:14950,Cost:9942}},
    {"New York":{Sale:13320,Cost:9646}}
];

var dataObjectCities =[
    {"cedar rapids":{Sale:990,Cost:257}},
    {"cleveland":{Sale:990,Cost:283}},
    {"wexford":{Sale:950,Cost:97}}
];

function bulletGraph(dataObject,container){
    var margin = {top: 5, right: 40, bottom: 20, left: 120},
        width = 960 - margin.left - margin.right,
        height = 50 - margin.top - margin.bottom;
    var chart = d3.bullet()
        .width(width)
        .height(height);
        var svg = d3.select("#"+container).selectAll("svg")
            .data(dataObject)
            .enter().append("svg")
            .attr("class", "bullet")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .call(chart);
        var title = svg.append("g")
            .style("text-anchor", "end")
            .attr("transform", "translate(-6," + height / 2 + ")");
        title.append("text")
            .attr("class", "title")
            .text(function(d) { return d.title; });
        title.append("text")
            .attr("class", "subtitle")
            .attr("dy", "1em")
            .text(function(d) { return d.subtitle; });
            setInterval(function(){
                updateBulletGraph(container,chart);
            },10000);
        /*d3.selectAll("#updateButton").on("click", function() {
            svg.datum(randomize).call(chart.duration(1000)); // TODO automatic transition
         });*/
}
function updateBulletGraph(container,chart){
    d3.json("../resources/bullet.json", function(error, data) {
        d3.select("#"+container).selectAll("svg")
            .datum(function (d, i) {
                d.ranges = data[i].ranges;
                d.measures = data[i].measures;
                d.markers = data[i].markers;
                return d;
            })
            .call(chart.duration(1000));
    });
}
function barWithNegativeValue(data,container){
    /*var data = [
        {"name":"TN", "original":47, "value":-26},
        {"name":"MS", "original":62, "value":-11},
        {"name":"NM", "original":63, "value":-10},
        {"name":"IN", "original":66, "value":-7},
        {"name":"UT", "original":66, "value":-7},
        {"name":"WV", "original":66, "value":-7},
        {"name":"AL", "original":67, "value":-6},
        {"name":"MA", "original":67, "value":-6},
        {"name":"NC", "original":67, "value":-6},
        {"name":"CO", "original":68, "value":-5},
        {"name":"OK", "original":68, "value":-5},
        {"name":"AR", "original":69, "value":-4},
        {"name":"ME", "original":69, "value":-4},
        {"name":"NV", "original":69, "value":-4},
        {"name":"AZ", "original":70, "value":-3},
        {"name":"FL", "original":70, "value":-3},
        {"name":"GA", "original":70, "value":-3},
        {"name":"KY", "original":70, "value":-3},
        {"name":"CT", "original":71, "value":-2},
        {"name":"HI", "original":71, "value":-2},
        {"name":"IL", "original":71, "value":-2},
        {"name":"LA", "original":76, "value":3},
        {"name":"MD", "original":76, "value":3},
        {"name":"CA", "original":77, "value":4},
        {"name":"ID", "original":77, "value":4},
        {"name":"NJ", "original":77, "value":4},
        {"name":"NE", "original":78, "value":5},
        {"name":"NY", "original":78, "value":5},
        {"name":"RI", "original":78, "value":5},
        {"name":"VA", "original":78, "value":5},
        {"name":"DE", "original":80, "value":7},
        {"name":"MI", "original":80, "value":7},
        {"name":"NH", "original":80, "value":7},
        {"name":"SD", "original":80, "value":7},
        {"name":"MN", "original":81, "value":8},
        {"name":"ND", "original":81, "value":8}
    ];*/

    var margin = {top: 30, right: 10, bottom: 10, left: 10},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
    var x = d3.scale.linear()
        .range([0, width])
    var y = d3.scale.ordinal()
        .rangeRoundBands([0, height], .2);
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("top");
    var svg = d3.select("#"+container).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    x.domain(d3.extent(data, function(d) { return d.value; })).nice();
    y.domain(data.map(function(d) { return d.name; }));
    svg.append("g")
        .attr("class", "x axis")
        .call(xAxis);
    svg.append("g")
        .attr("class", "y axis")
        .append("line")
        .attr("x1", x(0))
        .attr("x2", x(0))
        .attr("y2", height);
    var sel = svg.selectAll(".bar")
        .data(data).enter();
    sel.append("rect")
        .attr("class", function(d) { return d.value < 0 ? "bar negative" : "bar positive"; })
        .attr("x", function(d) { return x(Math.min(0, d.value)); })
        .attr("y", function(d) { return y(d.name); })
        .attr("width", function(d) { return Math.abs(x(d.value) - x(0)); })
        .attr("height", y.rangeBand())
        .append("title")    //Adding the title element to the rectangles.
        .text(function(d){return d.name+':'+d.value});
    sel.append("text")
        .data(data)
        .attr("x", function(d) {
            return d.value<0?x(Math.max(0, d.value))+10:x(Math.min(0, d.value))-15;
        })
        .attr("y", function(d) { return y(d.name); })
        .text(function(d) {return d.name;})
        .attr("text-anchor", "left")
        .attr('dy',"10px");
}
/*function multiSelectPlugin(){

    $.each($(".my-select"), function(el) {
        var id = $(this).attr("id");
        $("#"+id).multiselect({
            multiple: false,
            classes: 'my-select',
            position: {
                my: 'left top',
                at: 'left bottom'
            },
            selectedList: 1
        }).multiselectfilter();
    });

    $.each($(".my-select-small"), function(el) {
        var id = $(this).attr("id");
        $("#"+id).multiselect({
            multiple: false,
            classes: 'my-select-small',
            position: {
                my: 'left top',
                at: 'left bottom'
            },
            selectedList: 1
        }).multiselectfilter();
    });

    $.each($(".my-select-multiple"), function(el) {
        var id = $(el).attr("id");

        var noneSelectedText = $(el).data("noneSelectedText");
        console.log(noneSelectedText);

        $("#"+id).multiselect({
            classes: 'my-select-multiple',
            position: {
                my: 'left top',
                at: 'left bottom'
            },
            noneSelectedText: noneSelectedText
        }).multiselectfilter();
    });

}*/

function getMarkerIconColor(congestion,type){
    var color = "";
    if(type == 'color'){
        if(congestion <=1 && congestion >= 0.85 ){
            color = '#00FF00'; // green
        }
        else if(congestion < 0.85 && congestion >= 0.6 ){

            color = '#FFFF00'; // yellow
        }
        else if(congestion < 0.6 && congestion >= 0.3 ){
            color = '#FF0000'; // red
        }
        else if(congestion < 0.3 && congestion >= 0 ){
            color = '#000000'; // black
        }
        return color;
    }else if(type == 'icon'){
        if(congestion <=1 && congestion >= 0.85 ){
            color = 'green'; // green
        }
        else if(congestion < 0.85 && congestion >= 0.6 ){

            color = 'yellow'; // yellow
        }
        else if(congestion < 0.6 && congestion >= 0.3 ){
            color = 'red'; // red
        }
        else if(congestion < 0.3 && congestion >= 0 ){
            color = 'black'; // black
        }
        return color;
    }


}

function dataConverstion(date){
    var convertDate = new Date(date);
    var month = convertDate.getMonth()+1;
    var day = convertDate.getDate();
    var hours = convertDate.getHours();
    var minutes =convertDate.getMinutes();
    if(month<10){
        month = '0'+month;
    }
    if(day<10){
        day = '0'+day;
    }
    if(hours<10){
        hours = '0'+hours;
    }
    if(minutes<10){
        minutes = '0'+minutes;
    }
    var date = convertDate.getFullYear()+'-'+month+'-'+day+' '+hours+':'+minutes;
    return date;
}



function getCongestionColorOrMarker(congestion,type){

    var hexColors = {green:'#00FF00',yellow:'#FFFF00',red:'#FF0000',black:'#000000'};
    var icons = {green:'.../../images/marker-green.png',yellow:'.../../images/marker-yellow.png',red:'.../../images/marker-red.png',black:'.../../images/marker-black.png'};

    var whichColor = '';
    if(congestion <=1 && congestion >= 0.85 ){
        whichColor = 'green';
    }
    else if(congestion < 0.85 && congestion >= 0.6 ){
        whichColor = 'yellow';
    }
    else if(congestion < 0.6 && congestion >= 0.3 ){
        whichColor = 'red';
    }
    else if(congestion < 0.3 && congestion >= 0 ){
        whichColor = 'black';
    }

    return (type == 'color')? hexColors[whichColor] : icons[whichColor];

}

//FOr showing defined mappings in mapping edit view
function showEditableDefinedMappings(index,htmlDivId,structId,alias,mapped_from,schema_id){


    var newFieldId=structId;
    var newFieldAlias=alias;
    var mappedFieldsArray=mapped_from;
    var html='<tr id=rowId'+newFieldId+'><td data-id='+newFieldId+'><a class="editMapping"  id='+newFieldId+' data-new="true" data-type="ss" data-mapped='+JSON.stringify(mappedFieldsArray)+'>'+newFieldAlias+'</a></td><td>'
    var mappedHtml='<select id=select'+newFieldId+'>';
    for(var i=0;i<mappedFieldsArray.length;i++)
    {

        var fieldObj=mappedFieldsArray[i];
        var fieldName=fieldObj.field;
        var fieldId=fieldObj.field_id;
        //html=html+'<tr><td>'+fieldName+'</p><p>'+fieldId+'</p>'
        mappedHtml=mappedHtml+'<option value='+fieldId+' data-htmlId='+htmlDivId+' data-schemeId='+schema_id+'>'+fieldName+'</option>'
    }
    mappedHtml=mappedHtml+'</select>'
    html=html+mappedHtml+'</td><td>&nbspNew</td><td><i class="icon-remove removeMapping"  style="color: red;cursor: pointer;" data-new="true" data-id='+newFieldId+' data-mapped='+JSON.stringify(mappedFieldsArray)+'></i></td></tr>';

    //console.log('mappedHtml');
    //console.log(mappedHtml);

    $('#viewMappingsTable').append(html);
    }


function timeAreaCompositeGraph(gdata, el, xAxis, yAxis, label){
    var docs = gdata; //$.parseJSON(response_data[0].docs);
    if(typeof docs == "undefined")
        return;
    var series = [];
    var tooltipKeyword = [];
    var keyword= label;
    for(var key in docs){
        var data = [];
        tooltipKeyword[key] = [];
        var subData = docs[key];
        for(var y=0;y<yAxis.length;y++){
            var data = [];
            tooltipKeyword[yAxis[y]] = [];
            for(var i=0; i < subData.length;i++ ){
                var record = subData[i];
                var datetime =  new Date(parseInt(record[xAxis]));
                var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
                if( record[yAxis[y]]==""){
                    tooltipKeyword[yAxis[y]]["0"] = [];
                    tooltipKeyword[yAxis[y]]["0"].push(record[keyword]);
                    data.push([timestamp,0]);
                }else if(isNaN(parseFloat(record[yAxis[y]]))== false){
                    tooltipKeyword[yAxis[y]][timestamp+parseFloat(record[yAxis[y]])] = [];
                    tooltipKeyword[yAxis[y]][timestamp+parseFloat(record[yAxis[y]])].push(record[keyword]);
                    data.push([timestamp,parseFloat(record[yAxis[y]])]);
                }else{
                    tooltipKeyword[yAxis[y]]["0"] = [];
                    tooltipKeyword[yAxis[y]]["0"].push(record[keyword]);
                    data.push([timestamp,0]);
                }
            }
        }
        series.push({name:key,data:data});
    }
    var options = {
        chart: {
            type:'area'
        },
        credits: {
            enabled: false
        },
        title: {
            text: $('#aggregationList :selected').text()
        },
        yAxis:{
            title: {
                text: yAxis
            }
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        legend: {
            enabled: true
        },
        rangeSelector:{
            enabled:false
        },
        navigation: {
            buttonOptions: {
                x: -20
            }
        },
        tooltip: {
            /*formatter: function () {
                var s = '<b>' + Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '</b>';
                $.each(this.points, function (i, point) {
                    var t=yAxis[i];
                    if(label!=""){
                        t=tooltipKeyword[point.name][yAxis[i]][this.x+this.y];
                        s += '<br/><span style="color:'+point.series.color+'">'+ t +': </span>'+ point.y ;
                    }else{
                        s += '<br/><span style="color:'+point.series.color+'">'+ t +': </span>'+ point.y ;
                    }
                });
                return s;
            }*/
        },
        series: series
    };
    $(el).highcharts('StockChart',options);
}
function timelineBarCompositeGraph(data, el, xAxis, yAxis, label,aggregationText){
    var docs = data;
    var series = [];
    var tooltips = [];
    var colorKey = 0;
    for(var key in docs) {
        var series2 = [];
        var subData = docs[key];
        for(var y=0;y<yAxis.length;y++){
            for (var i=0;i<subData.length;i++){
                var datetime =  new Date(parseInt(subData[i][xAxis]));
                var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
                if(!isNaN(subData[i][yAxis[y]])){
                    series2.push([timestamp,parseFloat(subData[i][yAxis[y]])]);
                    if(label!=""){
                        if(!isNaN(subData[i][label])){
                            tooltips["'"+key+"'"+"'"+timestamp+parseFloat(subData[i][yAxis[y]])+"'"]=[];
                            tooltips["'"+key+"'"+"'"+timestamp+parseFloat(subData[i][yAxis[y]])+"'"].push(parseFloat(subData[i][label]));
                        }
                        else if(isNaN(subData[i][label])){
                            tooltips["'"+key+"'"+"'"+timestamp+parseFloat(subData[i][yAxis[y]])+"'"] = [];
                            tooltips["'"+key+"'"+"'"+timestamp+parseFloat(subData[i][yAxis[y]])+"'"].push((subData[i][label]));
                        }
                    }
                }
                else
                    series2.push([timestamp,0]);
                if(label!="") {
                    if (!isNaN(subData[i][label])) {
                        tooltips["'"+key+"'"+"'"+timestamp + 0 + "'"] = [];
                        tooltips["'"+key+"'"+"'"+timestamp + 0 + "'"].push(parseFloat(subData[i][label]));
                    }
                    else if (isNaN(subData[i][label])) {
                        tooltips["'"+key+"'"+"'"+timestamp + 0 + "'"] = [];
                        tooltips["'"+key+"'"+"'"+timestamp + 0 + "'"].push((subData[i][label]));
                    }
                }
            }
        }
        series.push({type:'column',name:key,data:series2,color:colorsArray[colorKey]});
        colorKey++;
    }
    var chartOptions={
        chart: {},
        credits: {
            enabled: false
        },
        yAxis:{
            title: {
                text: yAxis
            }
        },
        tooltip: {
            /*formatter: function () {
             var s = '<b>' + Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '</b>';
             $.each(this.points, function (i, point) {
             var t=yAxis[i];
             t=tooltips["'"+point.series+"'"+"'"+this.x+point.y+"'"];
             s += '<br/><span style="color:'+point.series.color+'">'+ t +': </span>'+ point.y ;

             });
             return s;
             }*/
        },
        rangeSelector:{
            enabled:false
        },
        legend: {
            enabled: true
        },
        title: {
            text: aggregationText
        },
        navigation: {
            buttonOptions: {
                x: -20
            }
        },
        series: series
    };
    $(el).highcharts('StockChart',chartOptions);
   // var chart = $(el).highcharts('StockChart',chartOptions);
    //hideZoomBar(chart);
}
function compareMultipleSeriesComposite(data, el, xAxis, yAxis, label,aggregationText){
    var docs = data;
    var series = [];
    var tooltips = [];
    var colorKey = 0;
    for(var key in docs){
        var partialSeries = [];
        var subData = docs[key];
        tooltips[key] = [];
        for(var k=0;k<yAxis.length;k++){
            for(var j=0;j<subData.length;j++){
                var datetime =  new Date(parseInt(subData[j][xAxis]));
                var timestamp = Date.UTC(datetime.getFullYear(),datetime.getMonth(),datetime.getDate(),datetime.getHours(),datetime.getMinutes(),datetime.getSeconds(),datetime.getMilliseconds());
                if(!isNaN(subData[j][yAxis[k]])){
                    partialSeries.push([timestamp,parseFloat(subData[j][yAxis[k]])]);
                    if(!isNaN(subData[j][label])){
                        tooltips["'"+key+"'"+"'"+timestamp+parseFloat(subData[j][yAxis[k]])+label+"'"]=[];
                        tooltips["'"+key+"'"+timestamp+parseFloat(subData[j][yAxis[k]])+label+"'"].push(parseFloat(subData[j][label]));
                    }
                    else if(isNaN(subData[j][label])){
                        tooltips["'"+key+"'"+timestamp+parseFloat(subData[j][yAxis[k]])+label+"'"] = [];
                        tooltips["'"+key+"'"+timestamp+parseFloat(subData[j][yAxis[k]])+label+"'"].push((subData[j][label]));
                    }
                }
                else{
                    partialSeries.push([timestamp,0]);
                    if(label!=""){
                        if(!isNaN(subData[j][label])) {
                            tooltips["'"+key+"'"+timestamp+0+label+"'"]=[];
                            tooltips["'"+key+"'"+timestamp+0+label+"'"].push(parseFloat(subData[j][label]));
                        }
                        else if(isNaN(subData[j][label])){
                            tooltips["'"+key+"'"+timestamp+0+label+"'"]=[];
                            tooltips["'"+key+"'"+timestamp+0+label+"'"].push((subData[j][label]));
                        }
                    }
                }
            }
        }
        series.push({name:key,data:partialSeries,color:colorsArray[colorKey]});
        colorKey++;
    }
    var chartOptions={
        chart: {},
        yAxis: {
            title: {
                text: yAxis
            }
        },
        title:{
            text:(aggregationText==""||typeof aggregationText=="undefined")?'':aggregationText
        },
        credits: {
            enabled: false
        },
        tooltip: {
            /*formatter: function () {
                var s = '<b>' + Highcharts.dateFormat('%A, %b %e, %Y', this.x) + '</b>';
                $.each(this.points, function (i, point) {
                    var t=yAxis[i];
                    if(label!="")
                        t=tooltips["'"+this.x+point.y+label[0]+"'"];
                    s += '<br/><span style="color:'+point.series.color+'">'+ t +': </span>'+ point.y ;
                });
                return s;
            }*/
        },
        rangeSelector: {
            enabled: false
        },
        legend: {
            enabled: true
        },
        navigation: {
            buttonOptions: {
                x: -20
            }
        },
        series: series
    };
    $(el).highcharts('StockChart',chartOptions);
    var chart = $(el).highcharts();
}
function pieChartWithVersion(data, el,yAxis, label){
    // Create the chart
    var total = 0;
    for(var key in data){
        total = (parseInt(total) + parseInt(data[key].length));
    }
    var brandData = [];
    var versionData = [];
    for(var key in data){
        var subTotal = parseInt(data[key].length);
        var subTotalPercentage = (subTotal/total)*100;
        brandData.push({drilldown: key,name: key,visible: true,y: parseFloat(subTotalPercentage)});
        var subData = _.groupBy(data[key],yAxis);
        var versionTotal = 0;
        for(var vkey in subData){
            versionTotal = (parseInt(versionTotal) + parseInt(subData[vkey].length));
        }
        var subVersionData = [];
        for(var vkey in subData){
            var subVersionTotal = parseInt(subData[vkey].length);
            var subVersionTotalPercentage = (subVersionTotal/versionTotal)*100;
            subVersionData.push({name: vkey,visible: true,y: parseFloat(subVersionTotalPercentage)});
        }
        versionData.push({id: key,name: key,data:subVersionData});
    }
    var chartOptions={
        chart: {
            type: 'pie'
        },
        credits: {
            enabled: false
        },
        title: {
            text: label
        },
        subtitle: {
            text: 'Click the slices to view '+yAxis+'.'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px;font-weight: bold;">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color};font-weight: bold">{point.name}</span>: {point.y:.2f}%<br/>'
        },
        series: [{
            name: label,
            colorByPoint: true,
            data: brandData
        }],
        drilldown: {
            series: versionData
        }
    };
    $(el).highcharts(chartOptions);
  }
