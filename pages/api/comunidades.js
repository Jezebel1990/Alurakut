import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const TOKEN = 'f70a46354b6f50eaacb88d69e29a1e';
        const client = new SiteClient(TOKEN);
        
        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "977058", // ID do Model de "Communities" criado pelo Dato
            ...request.body,
            // title: "Comunidade de Teste",
            // imageUrl: "https://github.com/Jezebel1990.png",
            // creatorSlug: "Jezebel1990"
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