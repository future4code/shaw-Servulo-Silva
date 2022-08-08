import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.ibb.co/mHgdHwY/eu.png" 
          nome="Sérvulo Cristian" 
          descricao="Oi, eu sou o Sérvulo. Sou estudante de Desenvolvimento Web na Labenu e gosto muito de aprender enquanto tento ajudar meus colegas"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons.flaticon.com/png/512/608/premium/608258.png?token=exp=1647974930~hmac=0bd7865438ff7dfa1e135d0774d41bef" 
          texto="Ver mais"
        />

        <CardPequeno 
                  imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1647973714~hmac=885842a9e9a3d3a29fc5c77175de5e97" 
                  info="Email: servuloccsilva@gmail.com" 
        />

        <CardPequeno 
                          imagem="https://as2.ftcdn.net/v2/jpg/02/72/89/67/1000_F_272896745_tlTivOH81qWIVzz34KqFGm8LO3N9hMYQ.jpg" 
                          info="Endereço: Rua dos Bobos, Número 0" 
                />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante Fullstack" 
        />
        
        <CardGrande 
          imagem="https://media.istockphoto.com/vectors/united-kingdom-and-american-flags-vector-id1130442140?k=20&m=1130442140&s=170667a&w=0&h=xB9biB_2kF6wKHu7e0ymqILukA9hnCBVrZbXtkN4NqA=" 
          nome="Professor Particular de Inglês" 
          descricao="Ajudando você a chegar á taõ sonhada fluência no idioma que o mundo fala" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
