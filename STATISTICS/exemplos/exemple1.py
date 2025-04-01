import numpy as np
# Gere dados fictícios (ex.: notas de 1000 alunos com média 7 e desvio 1.5)
populacao = np.random.normal(7, 1.5, 1000)
# Tire 50 amostras de tamanho 30 e calcule a média de cada uma
medias_amostrais = [np.mean(np.random.choice(populacao, 30)) for _ in range(50)]
# Plote a distribuição das médias amostrais (deve ser normal, pelo TCL!)
import matplotlib.pyplot as plt
plt.hist(medias_amostrais)
plt.show()