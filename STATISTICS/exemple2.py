import numpy as np
import matplotlib.pyplot as plt
# População não-normal (ex.: exponencial)
populacao = np.random.exponential(scale=2, size=10000)
# Amostras e médias
medias = [np.mean(np.random.choice(populacao, 40)) for _ in range(1000)]
plt.hist(medias, bins=30)
plt.title("Distribuição das Médias Amostrais (TCL)")
plt.show()