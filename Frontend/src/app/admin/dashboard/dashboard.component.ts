import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'
import { ServiceService } from 'src/app/service.service';
import * as moment from 'moment' 
import { DocServiceService } from 'src/app/doc-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chartOptions: {} | any;
  Highcharts=Highcharts;
    updateElementCounter: any;
    indexElementCount: number | undefined;
  constructor(private serv:ServiceService,
    private docServ:DocServiceService) { }

  orders:any;
  ServicesArray:any
  DocArray:any
  
  documents:any
  ngOnInit(): void {
      
    this.getAllServices()
    this.getAllDocuments()
    //this.takeServiceNames()

    this.chartOptions= {
        chart: {
            type: 'column'
        },
        title: {
            align: 'left',
            text: 'Nombre de documents par services. '
        },
        subtitle: {
            align: 'left',
            //text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'nombre de documents'
            }
    
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },
    
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
    
        series: [
            {
                name: "Browsers",
                colorByPoint: true,
                data: [
                    {
                        name: "chambre de finance",
                        y: 6,
                        drilldown: "chambre de finance"
                    },
                    {
                        name: "chambre des parties",
                        y: 4.5,
                        drilldown: "chambre des parties"
                    },
                    {
                        name: "chambre de santé",
                        y: 3,
                        drilldown: "chambre de santé"
                    },
                    {
                        name: "chambre régionale",
                        y: 8,
                        drilldown: "chambre régionale"
                    },
                    {
                        name: "chambre locale",
                        y: 6.5,
                        drilldown: "chambre locale"
                    },
                   
                ]
            }
        ],
        
    }


  }





















  getAllServices(){
      this.serv.getServices().subscribe(data =>{
      this.ServicesArray=data
      //console.log(data)
      //console.log(this.ServicesArray)
    })
  }

  
  getAllDocuments(){
    this.docServ.getAllDocs().subscribe(res =>{
    this.DocArray=res
    //console.log(res)
    //console.log(this.DocArray)
    const localChartData= this.getChartData(res)
    //console.log(res)
  });
}
//chtourou

getChartData(res:any) {
    console.log(res)
    this.orders = res

    const documents= this.orders.map((o: { id: any; })=>o.id);
    console.log('documents: ',documents)
    //const docs= this.orders.map( (o: { id: any; })=> moment(new Date(o.id)).format('') )
    //console.log('docs: ',docs)
    this.documents= documents

    const services= this.orders.map( (o: { nom_service: any; })=>o.nom_service )
    console.log('services: ',services)
   

    const dates= this.orders.map( (o: { Date_depot: any; })=>o.Date_depot )
    console.log('dates: ',dates)

    /*
    const formattedOrders = this.orders.reduce((r: any[][], e: { id: moment.MomentInput; services: any; }) => {
        r.push([moment(e.id).format('YY-MM-DD'), e.services]);
        return r;
      }, []);

      console.log(formattedOrders)*/

    const gorupBy = (key:any, arr:any) => this.orders.reduce()
    console.log(gorupBy('nom_service', this.orders))
}

/*
private groupByElement(receivedData: ReceivedData, elements: Array<GroupByElement>) {
    let groupElement: GroupByElement = new GroupByElement;

    if (!elements.find(x => x.element== receivedData.element)) {
      groupElement.element= receivedData.element;
      groupElement.count = 1;
      elements.push(groupElement);
    } else {
      this.updateElementCounter = elements.find(x => x.element== receivedData.element)?.count;
      this.updateElementCounter! += 1;
      this.indexElementCount = elements.findIndex(x => x.element== receivedData.element);

      elements[this.indexElementCount].count = this.updateElementCounter!;
    }
  }*/



  
}
