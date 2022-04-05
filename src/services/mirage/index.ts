import { createServer, Factory, Model} from 'miragejs';

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer(){
  const server = createServer({
    models: {
      //partial serve para que não seja obrigatório informar todas as coisas contidas na tipagem
      user: Model.extend<Partial<User>>({})
    },

    factories:{
      user: Factory.extend({
        name(i: number){
          //vai retornar o usuário 1, 2, 3
          return `User ${i +1}`
        },
        email(){

        },
        createdAt(){

        },
      })
    },

    seeds(server){
    },

    routes(){
      this.namespace = 'api'
      this.timing = 750

      //quando chamar a rota users, vai retornar automaticamente a lista completa de usuários
      this.get('/users')
      //cria um usuário no banco de dados do mirage
      this.post('/users')

      this.namespace = '';
      this.passthrough()
    }
  })
  return server;
}