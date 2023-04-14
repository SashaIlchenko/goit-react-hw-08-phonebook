import styled from "@emotion/styled";
import { Form as FormikForm } from 'formik';
import { Field } from "formik";

export const Form = styled(FormikForm)`
width: 300px;
padding: 30px;
background-color:#E0FFFF;
margin-right:auto;
margin-left:auto;
border: 1px solid #008080;
border-radius:3px;
display: flex;
flex-direction: column;
gap: 10px;`

export const FormField = styled.label`
display: flex;
flex-direction: column;
color: #696969;
font-size:24px;
font-weight: 600;`
export const Input = styled(Field)`
margin-top:10px;
padding-left: 15px;
border-radius: 3px;
border: none;
height: 50px;`
export const AddBtn = styled.button`
font-size:18px;
font-weight: 500;
margin-top: 10px;
padding:8px;
weight: 150px;
color: #fff;
opacity: 0.7;
border: none;
border-radius:3px;
background-color: #008080;
&:hover {
    opacity: 1;
}`