import './App.css';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import TreeGridTemplate from './TreeGridTemplate';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


   testAlert(rowInfo) {
    debugger
    if (rowInfo) {
      alert("Custmoer Id: " + rowInfo.data.CustomerID);
    }
  }

  render() {
    return (
      <div>

        <div className="App">
          <h1>GridComponent</h1>

          <TreeGridTemplate />

          <GridComponent 
            rowSelected={this.testAlert.bind(this)}
          >
            <ColumnsDirective>
              <ColumnDirective field='OrderID' width='100' textAlign="Right" />
              <ColumnDirective field='CustomerID' width='100' />
              <ColumnDirective field='EmployeeID' width='100' textAlign="Right" />
              <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right" />
              <ColumnDirective field='ShipCountry' width='100' />
            </ColumnsDirective>
          </GridComponent>
        </div>

      </div>
    );
  }
}

export default (App);
