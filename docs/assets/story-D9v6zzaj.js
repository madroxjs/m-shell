import{j as t}from"./jsx-runtime-DBEcOq3S.js";import{f as s}from"./index-CERzeK2C.js";import{T as i,a as r,b as l,c as o,d as n,e as m,f as e,g as d}from"./component-D1-lThnV.js";import"./index-DtJulBIN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DZLKizrv.js";import"./utils-B06rK7pa.js";const c=[{invoice:"INV001",paymentStatus:"Paid",totalAmount:"$250.00",paymentMethod:"Credit Card"},{invoice:"INV002",paymentStatus:"Pending",totalAmount:"$150.00",paymentMethod:"PayPal"},{invoice:"INV003",paymentStatus:"Unpaid",totalAmount:"$350.00",paymentMethod:"Bank Transfer"},{invoice:"INV004",paymentStatus:"Paid",totalAmount:"$450.00",paymentMethod:"Credit Card"},{invoice:"INV005",paymentStatus:"Paid",totalAmount:"$550.00",paymentMethod:"PayPal"},{invoice:"INV006",paymentStatus:"Pending",totalAmount:"$200.00",paymentMethod:"Bank Transfer"},{invoice:"INV007",paymentStatus:"Unpaid",totalAmount:"$300.00",paymentMethod:"Credit Card"}],f={component:i,parameters:{docs:{subtitle:"A responsive table component.",description:{component:"[ShadCn Documentation](https://ui.shadcn.com/docs/components/table)"}}},args:{onClick:s()}},N={args:{children:t.jsxs(t.Fragment,{children:[t.jsx(r,{children:"A list of your recent invoices."}),t.jsx(l,{children:t.jsxs(o,{children:[t.jsx(n,{className:"w-[100px]",children:"Invoice"}),t.jsx(n,{children:"Status"}),t.jsx(n,{children:"Method"}),t.jsx(n,{className:"text-right",children:"Amount"})]})}),t.jsx(m,{children:c.map(a=>t.jsxs(o,{children:[t.jsx(e,{className:"font-medium",children:a.invoice}),t.jsx(e,{children:a.paymentStatus}),t.jsx(e,{children:a.paymentMethod}),t.jsx(e,{className:"text-right",children:a.totalAmount})]},a.invoice))}),t.jsx(d,{children:t.jsxs(o,{children:[t.jsx(e,{colSpan:3,children:"Total"}),t.jsx(e,{className:"text-right",children:"$2,500.00"})]})})]})}};export{N as Default,f as default};