import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-workers-comp',
  templateUrl: './basics-workers-comp.component.html',
  styleUrls: ['./basics-workers-comp.component.scss']
})
export class BasicsWorkersCompComponent implements OnInit, OnDestroy {
  private worker: Worker;
  sharedWorker: any;

  constructor() { }

  ngOnInit(): void {
    // shared worker
    this.sharedWorker = new SharedWorker('/assets/shared-worker.js');
    console.log("this.sharedWorker", this.sharedWorker)
    this.sharedWorker.port.onmessage = ({ data }) => {
      console.log("data", data)
    };
    this.sharedWorker.port.start();

    // web worker
    this.worker = new Worker(new URL('../shared/workers/web.worker.ts', import.meta.url));
    this.worker.onmessage = ({ data }) => {
      console.log("data listening", data)
    };
    this.worker.onerror = (error) => {
      console.log("Error while using web worker", error)
    };
  }

  startPrinting(): void {
    this.worker.postMessage({ startingNumber: 1 }); // Start printing numbers from 1
  }

  startPrintingBySharedWorker(): void {
    this.sharedWorker.port.postMessage("Hii, my name is Dhruvil");
  }

  ngOnDestroy(): void {
    // Terminate the worker when the component is destroyed
    this.worker.terminate();
    this.sharedWorker.terminate();
  }
}
