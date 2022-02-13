import styled from "styled-components";

export const HistoryBodyHeroImage = styled.div `
--name: "HistoryBodyHeroImage";
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background-color: rgba(0,0,0,0.7);
`

export const HistoryBody = styled.div `
--name: "HistoryBody";
min-width:50%;
height:80vh;
padding:20px;
background:white;
position:fixed;
top:50%;
left:50%;
transform:translate(-50%, -50%);
box-shadow: 0px 0px 10px 0px rgba(0,0,0,28%);
border:none;
`

export const CloseHistoryBTN = styled.button `
position:absolute;
top:20px;
right:20px;
`

export const Table = styled.table `
border-collapse: collapse;
width:100%;

thead{
    tr{
        background:${({theme})=>theme.templateColors.blue};
        th {
            padding:5px;
        }
        
    }
}

tbody{
    tr{
        
        text-align:center;
        transition:transform 0.5s;
        :hover{
            transform:scale(1.015)
            
        }
        td {
            padding:10px;
        }
        
    }
    tr:nth-child(1n){
        background:#c5c5c5;
    }
    tr:nth-child(2n){
        background:#d8d8d8;
    }

}
`