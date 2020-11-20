import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--blackLighter);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 32px;
  color: var(black);
  text-align: center;     
  @media (max-width: 800px) {
    margin-bottom: 30px;
    
  }
  .logoFooter {
    max-width: 50px;  
  }   
  .Icone {
    max-width: 20px;        
    margin: 20px; 
  }    
`;