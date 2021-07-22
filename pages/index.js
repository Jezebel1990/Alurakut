import React from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileRelationsBox(propriedades) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {propriedades.title} ({propriedades.items.length})
      </h2>
      <ul>
        {/* {seguidores.map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`https://github.com/${itemAtual}.png`}>
                <img src={itemAtual.image} />
                <span>{itemAtual.title}</span>
              </a>
            </li>
          )
        })} */}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}

export default function Home(props) {
  const usuarioAleatorio = props.githubUser;
  const [comunidades, setComunidades] = React.useState([]);
  const [depoimentos, setDepoimentos] = React.useState([]);
  // const comunidades = comunidades[0];
  // const alteradorDeComunidades/setComunidades = comunidades[1];
  // const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ]
  const [seguidores, setSeguidores] = React.useState([]);
  // 0 - Pegar o array de dados do github 
  React.useEffect(function() {
    // GET
    fetch('https://api.github.com/users/peas/followers')
    .then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    })
    .then(function(respostaCompleta) {
      setSeguidores(respostaCompleta);
    })


    // API GraphQL
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '48d8f66e19c4a335059aaddc48efdd',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ "query": `query {
        allCommunities {
          id 
          title
          imageUrl
          creatorSlug
        }
      }` })
    })
    .then((response) => response.json()) // Pega o retorno do response.json() e já retorna
    .then((respostaCompleta) => {
      const comunidadesVindasDoDato = respostaCompleta.data.allCommunities;
      console.log(comunidadesVindasDoDato)
      setComunidades(comunidadesVindasDoDato)
    })
    // .then(function (response) {
    //   return response.json()
    // })

  }, [])

// API GraphQL
fetch('https://graphql.datocms.com/', {
  method: 'POST',
  headers: {
    'Authorization': '5d92b226c37045daa5c9db117bf375',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({ "query": `query {
    allComments {
      id 
      text
      author
      date
    
      }
  }` })
})
  .then((response) => response.json()) // Pega o retorno do response.json() e já retorna
  .then((respostaCompleta) => {
   const depoimentosVindasDoDato = respostaCompleta.data.allComments;
   console.log(depoimentosVindasDoDato)
  setDepoimentos(depoimentosVindasDoDato)
})
// .then(function (response) {
//   return response.json()
// })


  // 1 - Criar um box que vai ter um map, baseado nos items do array
  // que pegamos do GitHub

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem-vindo(a), Jezebel
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle"><b>Comunidades</b></h2>
            <form onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();
                
                const dadosDoForm = new FormData(e.target);

                console.log('Campo: ', dadosDoForm.get('title'));
                console.log('Campo: ', dadosDoForm.get('image'));

                const comunidade = {
                  title: dadosDoForm.get('title'),
                  imageUrl: dadosDoForm.get('image'),
                  creatorSlug: usuarioAleatorio,
                }

                fetch('/api/communities', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(comunidade)
                })
                .then(async (response) => {
                  const dados = await response.json();
                  console.log(dados.registroCriado);
                  const comunidade = dados.registroCriado;
                  const comunidadesAtualizadas = [...comunidades, comunidade];
                  setComunidades(comunidadesAtualizadas)
                })
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                  />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>


          <Box>
            <h2 className="subTitle">
              <b>Depoimentos</b>
              <form onSubmit={function handleCriaDepoimentos(e) {
                e.preventDefault();
                
                const dadosDoForm = new FormData(e.target);

                console.log('Campo: ', dadosDoForm.get('text'));
                console.log('Campo: ', dadosDoForm.get('author'));
                console.log('Campo: ', dadosDoForm.get('date'));
                const depoimento = {
                  title: dadosDoForm.get('text'),
                  title: dadosDoForm.get('author'),
                  title: dadosDoForm.get('date'),
                  creatorSlug: usuarioAleatorio,
                }

                fetch('/api/comments', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(depoimento)
                })
                .then(async (response) => {
                  const dados = await response.json();
                  console.log(dados.registroCriado);
                  const depoimento = dados.registroCriado;
                  const depoimentosAtualizados = [...depoimentos, depoimento];
                  setComunidades(depoimentosAtualizados)
                })
            }}>
              <div>
                <input
                  placeholder="Escreva aqui seu depoimento"
                  name="title"
                  aria-label="Escreva aqui seu depoimento"
                  type="text"
                  />
              </div>
              <div>
                <input
                  placeholder="Nome do autor"
                  name="author"
                  aria-label="Nome do autor"
                />
              </div>

              <button>
                Criar depoimento
              </button>
            </form>
            </h2>

              <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Meus depoimentos ({depoimentos.length})
            </h2>
            <ul>
              {depoimentos.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                   <span>{itemAtual.text}</span> 
                    <span>{itemAtual.author}</span>
                    <div id="root">
                      <span>{itemAtual.date}</span>
                      </div> 
                 </li>
                )
              })}
            </ul>
           </ProfileRelationsBoxWrapper>
           
         </Box>
          </div>
         
          
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
            <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Minhas Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.slice(0,6).map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/communities/${itemAtual.id}`}>
                      <img src={itemAtual.imageUrl} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Meus Amigos ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.slice(0,6).map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

        </div>
      </MainGrid>
    </>
  )
}



export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  const token = cookies.USER_TOKEN;
  const decodedToken = jwt.decode(token);
  const githubUser = decodedToken?.githubUser;

  if (!githubUser) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  // const followers = await fetch(`https://api.github.com/users/${githubUser}/followers`)
  //   .then((res) => res.json())
  //   .then(followers => followers.map((follower) => ({
  //     id: follower.id,
  //     name: follower.login,
  //     image: follower.avatar_url,
  //   })));

  return {
    props: {
      githubUser,
    }
  }
}
