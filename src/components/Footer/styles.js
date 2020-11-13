import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--blackLighter);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(black);
  text-align: left;  
  display: flex;
  column-count: 2;  
  @media (max-width: 800px) {
    margin-bottom: 30px;
    
  }
  .logoFooter {
    height:100;
    width:100;
    margin: 0 20px 0 350px;    
  }  
  .Icones {
    float: right;
  }
  .Icone {
    max-width: 40px;        
    margin: 20px;                      
  }  

  
`;