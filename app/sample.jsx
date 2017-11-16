import * as React from "react";
import * as ReactDOM from "react-dom";
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
class App extends React.Component {
    render() {
        return <GridComponent dataSource={data} allowPaging={true}>
            <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='right'></ColumnDirective>
            <ColumnDirective field='CustomerName' headerText='Customer Name' width='150'></ColumnDirective>
            <ColumnDirective field='OrderDate' headerText='Order Date' width='130' format='yMd' textAlign='right' />
            <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' textAlign='right' />
            <ColumnDirective field='ShippedDate' headerText='Shipped Date' width='130' format='yMd' textAlign='right'></ColumnDirective>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Page]} />
        </GridComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('grid'));