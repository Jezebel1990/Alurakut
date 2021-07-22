const {DATOCMS_TOKEN} = process.env;
import { SiteClient } from 'datocms-client';


export default async function recebedorDeRequests(request, response) {
  if(request.method === 'POST') {
      const TOKEN = '840cd5de101b4719953b279c8c2adb';
      const client = new SiteClient(TOKEN);
      
      // Validar os dados, antes de sair cadastrando
      const registroCriado = await client.items.create({
          itemType: "998855", // ID do Model de "Comments" criado pelo Dato
          ...request.body,
          })
  
      console.log(registroCriado);
  
      response.json({
          dados: 'Algum dado qualquer',
          registroCriado: registroCriado,
      })
      return;
  }

  response.status(404).json({
      message: 'Ainda não temos nada no GET, mas no POST tem!'
  })
}