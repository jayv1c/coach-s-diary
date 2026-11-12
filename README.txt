DIÁRIO DO TÉCNICO — VERSÃO 1.16.0

O QUE ESTÁ INCLUÍDO
- index.html: aplicativo completo.
- manifest.json e icons/: instalação como PWA.
- service-worker.js e assets/: cache offline, distintivos e ilustrações de taças.
- A interface está em português.

PUBLICAR NO GITHUB PAGES
1. Crie um repositório no GitHub.
2. Envie todos os arquivos e pastas deste pacote, mantendo a estrutura.
3. No repositório, abra Settings > Pages.
4. Em Build and deployment, selecione Deploy from a branch, escolha a branch main e a pasta /(root), e salve.
5. Depois da publicação, abra o endereço HTTPS do GitHub Pages no Chrome do Android e escolha Instalar app ou Adicionar à tela inicial.

ATUALIZAR UMA VERSÃO
1. Faça um backup dos dados pelo app antes de trocar arquivos.
2. No mesmo repositório, envie os arquivos atualizados para os mesmos caminhos. Normalmente, substitua index.html e service-worker.js; inclua também qualquer arquivo novo ou atualizado em assets/ e icons/.
3. Confirme o commit na branch usada pelo GitHub Pages.
4. Aguarde o Pages publicar. Feche e abra o app ou atualize a página para carregar a nova versão.
5. Mantenha o mesmo endereço do app. Não limpe os dados do site: as carreiras ficam armazenadas localmente neste navegador e aparelho.

DADOS E BACKUPS
- A carreira fica no armazenamento local do navegador. Publicar uma versão nova no GitHub não transfere os dados entre aparelhos.
- Em Configurações > Backup dos dados, baixe o arquivo JSON do backup.
- Para levar a carreira a outro aparelho, abra o app no destino e restaure o arquivo JSON (ou use a sincronização com a nuvem, descrita no fim deste arquivo).
- O backup inclui os dados da carreira e imagens personalizadas. Para usar a mesma carreira em vários aparelhos, prefira a sincronização com a nuvem; o backup em arquivo continua valendo como cópia extra.

RECURSOS DESTA VERSÃO
- Sincronização com a nuvem por e-mail e senha (opcional): a mesma carreira em vários aparelhos, usando um Firebase gratuito. Veja o passo a passo na seção SINCRONIZAÇÃO COM A NUVEM, no fim deste arquivo.
- Mata-mata de ida e volta: ao escolher a competição no registro, o adversário e o mando do jogo de volta já vêm preenchidos.
- Nova carreira: escolha o tipo de temporada (europeia, de agosto a maio, como 2026/27, ou brasileira, ano corrido, como 2026) e a temporada em que a carreira começa. As carreiras antigas continuam europeias.
- Finanças: em Transferências há a sub-aba Finanças, onde você lança por temporada a verba de transferência, a verba de salário, o gasto com salário, outras receitas e outros gastos. O app calcula a verba restante, a sobra ou o estouro da folha e o resultado da temporada, e mostra uma tabela com todas as temporadas. Há botão para copiar as verbas da temporada anterior.
- Campeões das competições: agora dá para registrar também o vice, que pontua no ranking de clubes.
- Removidos nesta versão: o seletor de carreira da barra do topo (para trocar de carreira use o ☰, Minhas carreiras), as Cópias automáticas e a opção de colar o texto do backup (restaure sempre pelo arquivo JSON).
- Limpeza geral: removidas funções que não eram mais usadas, corrigido o link "Fonte IFFHS" do ranking (o endereço estava errado) e revisado o fluxo da nuvem, sem erros nos testes.
- Ranking de clubes refeito: base própria com nota para todos os clubes do app. Agora Real Madrid, Barcelona, Bayern, Manchester City, PSG, Liverpool, Arsenal e Inter de Milão têm reputação Mundial, e clubes como o Aston Villa ficam como Continental. Os títulos e vices continuam subindo a reputação.
- Cartão Continuar carreira: o número de jogos agora soma todas as temporadas, inclusive os totais lançados à mão, igual à aba Temporadas.
- Jornal: notícias de fatos que não existem mais (por exemplo, um título apagado) saem sozinhas. Novos marcos: jogos e participações em gols por jogador, assistências, sequência de jogos marcando, gols e vitórias do clube, jogos sem sofrer gols, sequência de ataque e pior derrota da carreira.
- Calendário: a semana começa no domingo, cada competição tem um fundo suave de cor própria e há uma legenda das cores embaixo do calendário.
- Registro de partida, dados do jogador: o 0 de gols, assistências e cartões agora é só uma dica apagada (não precisa apagar nem confirmar; se não preencher, vale 0). Na nota o ponto entra sozinho depois do primeiro número (65 vira 6.5); começando com 1 vale 10. A nota mínima aceita é 3.
- Registro de partida, fases de copa: ao registrar a primeira fase de uma copa, as fases anteriores ficam bloqueadas e a próxima já vem sugerida. Ao ser eliminado (derrota, agregado perdido ou pênaltis), as fases seguintes ficam bloqueadas; se você apagar o jogo, elas voltam.
- Estatísticas > Histórico: novo menu Por competição, com jogos, gols, assistências e G+A de cada jogador por competição, por temporada ou somando todas. Em uma temporada, o ✎ permite lançar os números à mão; o valor lançado substitui o das partidas e entra nos totais do jogador. "Voltar ao automático" desfaz.
- Ranking com pontos para vice e coluna de reputação; no registro de partida aparece favorito, azarão ou equilibrado; em Estatísticas há o desempenho por nível do adversário; o Jornal cita carrasco e azarão.
- Calendário mensal em Partidas: toque no dia para abrir uma janela e marcar os jogos; cada dia mostra o escudo do adversário, V/E/D e C/F (casa ou fora); use Registrar para preencher a partida.
- Balanço da temporada (edição especial): aparece ao fechar a temporada e pelo botão Balanço em Estatísticas > Temporadas. Mostra campanha, competições, artilheiro, assistências, craque, time da temporada (4-3-3 pelas notas), mercado e momentos. É calculado a partir dos dados, sem guardar notícias, e pode ser salvo ou compartilhado como imagem.
- Jornal em edições mensais (pela data das partidas), apenas da temporada atual (notícias de outras temporadas são apagadas): manchete, resultados da semana, números e craque da semana, com navegação entre edições. Partidas sem data entram em uma edição retrospectiva por temporada. Matérias novas: marcos (jogos no comando, gols pelo clube), maior vitória, sequências e primeira vitória sobre um adversário.
- Avisos de destaque: ao registrar algo importante aparece um aviso com o botão Ler; títulos abrem uma edição extra. Uma bolinha em Resumo indica novidades. Em Jornal, no rodapé, escolha entre só destaques, todas as notícias ou desligado.
- Menu inicial ao abrir o app: Continuar carreira, Iniciar nova carreira, Minhas carreiras, Configurações (as mesmas de dentro do jogo), atalho de backup e instalação do app. Em Configurações do menu há a opção de pular o menu ao abrir. Dentro do jogo, o botão ☰ no topo volta ao menu.
- O Jornal publica automaticamente uma matéria curta por partida. As notícias destacam placar e fatos relevantes, como hat-trick, goleada, vitória inesperada, sequência de resultados ou uma atuação individual marcante, sem listar todos os participantes.
- O registro de partida permite informar a data. Ela acompanha o intervalo da temporada (temporada europeia: 1º de julho a 30 de junho; brasileira: 1º de janeiro a 31 de dezembro), aparece no jornal e organiza as matérias por data. A próxima data sugerida é calculada a partir dos jogos já registrados; as datas antigas ficam opcionais para preservar registros anteriores.
- Títulos e transferências de impacto também geram notícias. O jornal tem aparência de página esportiva, mostra seis matérias por página e permite navegar pelo histórico. Entrevistas não são mais exibidas.
- Ao abrir o jornal pela primeira vez, partidas antigas recebem matérias retrospectivas automaticamente.
- Em Estatísticas > Temporadas > Campeões das competições, registre o vencedor de um torneio mesmo quando seu time não participou. Isso influencia o ranking interno.
- A nota-base do ranking é uma estimativa própria do app para a grandeza e a força atual de cada clube (de 0 a 100, ajustada para no máximo 85), feita com referência em rankings reais, na tradição do clube e no nível da liga. Todos os clubes da base do app têm nota própria. Títulos e vice-campeonatos registrados somam um bônus de até 15 pontos (vice vale 40% do título), então a nota máxima é 100. A reputação (Local, Regional, Nacional, Continental, Mundial) combina a nota-base com os títulos e vices, que pesam mais nela, e evolui ao longo da carreira. São dados offline e não se atualizam sozinhos.
- O ranking inclui os clubes da base do app e equipes adicionais da CONCACAF, com busca e colunas para nota-base, bônus, nota total e títulos.
- Estatísticas por temporada, competição e mando, gráficos recolhíveis, retrospecto de adversários com busca e importação de jogadores de temporadas anteriores.
- Escudos de clubes, logos de competições e imagens de taças são armazenados separadamente.

FONTES DO RANKING
- Referência: IFFHS, ranking mundial de clubes: https://www.iffhs.com/
- Referência: CONCACAF, atualização de 9 de setembro de 2026: https://www.concacaf.com/competitions/champions-cup/news/toluca-fc-leads-the-latest-concacaf-club-rankings
- Opta explica seu ranking global Elo, disponível em https://theanalyst.com/articles/power-rankings-your-club-ranked. O ranking do app usa os snapshots publicados acima e não busca a classificação diária da Opta.

OBSERVAÇÕES SOBRE O USO OFFLINE
- Para instalar como PWA, publique o app em HTTPS e abra-o online pelo menos uma vez.
- O app pode abrir offline depois que os arquivos forem armazenados pelo navegador. A fonte Barlow do Google pode precisar de conexão.
- Os dados e imagens adicionados no app ficam neste navegador/aparelho até exportar um backup.
- O app pede ao navegador armazenamento persistente, para reduzir o risco de limpeza automática. Em Configurações > Backup dos dados aparece se a proteção foi concedida; ela é mais provável com o app instalado na tela inicial.
- Se um escudo ou uma taça não carregar, o app mostra as iniciais do clube ou uma taça desenhada no lugar. Para ver as imagens, confirme que a pasta assets/ foi enviada ao GitHub com os nomes em minúsculas (ex.: assets/clubs/ars.png). Só 32 clubes têm escudo embutido; nos demais, use Configurações para adicionar o escudo.
- Se a rede demorar mais de 3 segundos, o app abre pela cópia guardada e se atualiza em segundo plano.
- A cada versão nova, atualize APP_VERSION no início do service-worker.js para o mesmo número do index.html.

SINCRONIZAÇÃO COM A NUVEM (OPCIONAL, GRATUITA)
Serve para usar a mesma carreira em outro celular ou no computador, entrando com e-mail e senha. Os dados ficam no seu próprio projeto do Firebase (Google). O plano gratuito (Spark) não pede cartão e é suficiente para este app.

Passo a passo (faça uma vez, de preferência no computador):
1. Abra console.firebase.google.com, entre com a sua conta Google e clique em Criar projeto. Dê um nome (ex.: diario-tecnico). O Google Analytics pode ficar desativado.
2. No menu da esquerda, abra Authentication, clique em Começar, vá em Método de login, escolha E-mail/senha, ative a primeira chave (não a de link por e-mail) e salve.
3. No menu, abra Realtime Database, clique em Criar banco de dados, escolha o local (pode ser o padrão) e inicie no modo bloqueado.
4. Na aba Regras do Realtime Database, apague tudo, cole o texto abaixo e clique em Publicar:
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "auth != null && auth.uid === $uid",
        ".write": "auth != null && auth.uid === $uid"
      }
    }
  }
}
5. Volte à Visão geral do projeto, clique no ícone </> (Web), registre um app (qualquer apelido, sem Hosting) e copie o valor de apiKey (começa com AIza). O endereço do banco aparece na aba Dados do Realtime Database, no topo, e termina em firebaseio.com ou firebasedatabase.app.
6. Monte o código de conexão juntando os dois com ponto e vírgula, sem espaços: chave;endereço (ex.: AIzaSy...;https://nome-default-rtdb.firebaseio.com).
7. No app, abra Configurações, Sincronizar com a nuvem, cole o código e toque em Salvar código. Digite um e-mail e uma senha (mínimo 6 caracteres) e toque em Criar conta.
8. Em outro aparelho: instale o app, cole o mesmo código, escolha Entrar com o mesmo e-mail e senha. Os dados da carreira aparecem sozinhos.

Como funciona: ao abrir o app e depois de alterações, ele sincroniza sozinho (dá para desligar). Se os dois aparelhos mudarem coisas diferentes antes de sincronizar, o app pergunta qual versão manter, e a versão descartada neste aparelho fica nas cópias automáticas. O backup em arquivo continua valendo como proteção extra. A senha não é guardada no aparelho, só a sessão.


ATUALIZAÇÃO v1.16.0+ (INDEXEDDB & RESTAURAÇÃO POR TEXTO):
- Escudos e imagens personalizadas são armazenados no IndexedDB nativo do navegador, eliminando o limite de 5 MB do localStorage.
- Caixa de texto direta para restauração de backups (.json): permite colar o código diretamente no app caso o seletor de arquivos apresente limitações no aparelho.
