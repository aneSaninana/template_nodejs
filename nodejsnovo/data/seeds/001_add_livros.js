exports.seed = function (knex){
  return knex("livros").del()
  .then(function() {
      return knex("livros").insert([
          {
              titulo:"Web Design Responsivo", autor: "Mauricio Silva", ano: 2014, preco: 73.0, foto: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/4e37aef84e7eb21870481f92721651377842bc42.jpg"
          },
          {
              titulo:"Tecnologia Educacional - Teorias da Instrução", autor: "J. Batista Araújo e Oliveira", ano: 1973 ,
              preco:60.00 , foto: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/2a25d3f0ecdeca87801b479d3970205ceedd0b05.jpg"
          },
          {
              titulo:"Tecnologia da Informação: Planejamento e Gestão de Estratégias ", autor: " Fernando José Barbin Laurindo", ano:2002 ,
              preco: 70.00, foto: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/37c5b4b78d687d9c83ee71a786063c817c65368c.jpg"
          },
          {
              titulo:"A Revolução dos Bichos ", autor: "George Orwell", ano: 1999,
              preco: 68.00 , foto: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/33c58f12b61a13fda2f2cec1aca488076f18930d.jpg"
          },
          {
              titulo:"Ciencia e Tecnologia Hoje", autor: "Nicolas Witkowski", ano:1995 ,
              preco: 45.00, foto: "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/428ef3eadd7f94ea39bacd1c4b7e80467b690ba2.jpg"
          },


      ]);
  });
}


