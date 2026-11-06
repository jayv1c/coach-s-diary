DIÁRIO DO TÉCNICO — VERSÃO 1.11.0

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
- Em Configurações > Backup dos dados, baixe um JSON ou copie o texto do backup.
- Para levar a carreira a outro aparelho, abra o app no destino e restaure o JSON ou cole o conteúdo do backup.
- O backup inclui os dados da carreira e imagens personalizadas. A sincronização em nuvem foi removida; use o backup para transferir seus dados.

RECURSOS DESTA VERSÃO
- Mata-mata de ida e volta: ao escolher a competição no registro, o adversário e o mando do jogo de volta já vêm preenchidos.
- Cópias automáticas dentro do app (Configurações > Backup): uma ao abrir e uma por dia, dos últimos 7 dias, com botão Restaurar. Ficam neste aparelho e não substituem o backup em arquivo.
- Ranking com pontos para vice e coluna de reputação; no registro de partida aparece favorito, azarão ou equilibrado; em Estatísticas há o desempenho por nível do adversário; o Jornal cita carrasco e azarão.
- Calendário mensal em Partidas: marque os jogos de cada dia e use Registrar para preencher a partida.
- Balanço da temporada (edição especial): aparece ao fechar a temporada e pelo botão Balanço em Estatísticas > Temporadas. Mostra campanha, competições, artilheiro, assistências, craque, time da temporada (4-3-3 pelas notas), mercado e momentos. É calculado a partir dos dados, sem guardar notícias, e pode ser salvo ou compartilhado como imagem.
- Jornal em edições semanais (segunda a domingo, pela data das partidas), apenas da temporada atual (notícias de outras temporadas são apagadas): manchete, resultados da semana, números e craque da semana, com navegação entre edições. Partidas sem data entram em uma edição retrospectiva por temporada. Matérias novas: marcos (jogos no comando, gols pelo clube), maior vitória, sequências e primeira vitória sobre um adversário.
- Avisos de destaque: ao registrar algo importante aparece um aviso com o botão Ler; títulos abrem uma edição extra. Uma bolinha em Resumo indica novidades. Em Jornal, no rodapé, escolha entre só destaques, todas as notícias ou desligado.
- Menu inicial ao abrir o app: Continuar carreira, Iniciar nova carreira, Minhas carreiras, Configurações (as mesmas de dentro do jogo), atalho de backup e instalação do app. Em Configurações do menu há a opção de pular o menu ao abrir. Dentro do jogo, o botão ☰ no topo volta ao menu.
- O Jornal publica automaticamente uma matéria curta por partida. As notícias destacam placar e fatos relevantes, como hat-trick, goleada, vitória inesperada, sequência de resultados ou uma atuação individual marcante, sem listar todos os participantes.
- O registro de partida permite informar a data. Ela acompanha o intervalo da temporada (1º de julho a 30 de junho), aparece no jornal e organiza as matérias por data. A próxima data sugerida é calculada a partir dos jogos já registrados; as datas antigas ficam opcionais para preservar registros anteriores.
- Títulos e transferências de impacto também geram notícias. O jornal tem aparência de página esportiva, mostra seis matérias por página e permite navegar pelo histórico. Entrevistas não são mais exibidas.
- Ao abrir o jornal pela primeira vez, partidas antigas recebem matérias retrospectivas automaticamente.
- Em Estatísticas > Temporadas > Campeões das competições, registre o vencedor de um torneio mesmo quando seu time não participou. Isso influencia o ranking interno.
- A nota-base do ranking vem dos pontos do ranking mundial IFFHS de outubro de 2026 combinados com a CONCACAF de setembro de 2026, ajustada para no máximo 85. Títulos e vice-campeonatos registrados somam um bônus de até 15 pontos (vice vale 40% do título), então a nota máxima é 100. A reputação (Local, Regional, Nacional, Continental, Mundial) combina a nota-base com os títulos e vices, que pesam mais nela, e evolui ao longo da carreira. São dados offline e não se atualizam sozinhos.
- O ranking inclui os clubes da base do app e equipes adicionais da CONCACAF, com busca e colunas para nota-base, bônus, nota total e títulos.
- Estatísticas por temporada, competição e mando, gráficos recolhíveis, retrospecto de adversários com busca e importação de jogadores de temporadas anteriores.
- Escudos de clubes, logos de competições e imagens de taças são armazenados separadamente.

FONTES DO RANKING
- IFFHS, ranking mundial de clubes de outubro de 2026: https://isfhs.com/rankings/club-world-ranking-2026-the-top-500-2/
- CONCACAF, atualização de 9 de setembro de 2026: https://www.concacaf.com/competitions/champions-cup/news/toluca-fc-leads-the-latest-concacaf-club-rankings
- Opta explica seu ranking global Elo, disponível em https://theanalyst.com/articles/power-rankings-your-club-ranked. O ranking do app usa os snapshots publicados acima e não busca a classificação diária da Opta.

OBSERVAÇÕES SOBRE O USO OFFLINE
- Para instalar como PWA, publique o app em HTTPS e abra-o online pelo menos uma vez.
- O app pode abrir offline depois que os arquivos forem armazenados pelo navegador. A fonte Barlow do Google pode precisar de conexão.
- Os dados e imagens adicionados no app ficam neste navegador/aparelho até exportar um backup.
- O app pede ao navegador armazenamento persistente, para reduzir o risco de limpeza automática. Em Configurações > Backup dos dados aparece se a proteção foi concedida; ela é mais provável com o app instalado na tela inicial.
- Se um escudo ou uma taça não carregar, o app mostra as iniciais do clube ou uma taça desenhada no lugar. Para ver as imagens, confirme que a pasta assets/ foi enviada ao GitHub com os nomes em minúsculas (ex.: assets/clubs/ars.png). Só 32 clubes têm escudo embutido; nos demais, use Configurações para adicionar o escudo.
- Se a rede demorar mais de 3 segundos, o app abre pela cópia guardada e se atualiza em segundo plano.
- A cada versão nova, atualize APP_VERSION no início do service-worker.js para o mesmo número do index.html.
