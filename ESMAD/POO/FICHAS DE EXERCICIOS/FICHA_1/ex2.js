let num = prompt("Insira um número: ");

max = -Infinity;
min = +Infinity;

while (num != 0);
{
    num = prompt("Insira outro número: ");
    if (num > max)
    {
        max = num;
    }
    if (num < min)
    {
        min = num;
    }
}

if (num == 0)
{
    console.log(`O maior número inserido foi ${max}.`);
    console.log(`O menor número inserido foi ${min}.`);
}