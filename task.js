n=+prompt("enter a number: ")
temp=n
count=0, sum=0
while(n!=0){
    rem=n%10
    n=(n/10)-(rem/10)
     count++
}
n=temp
while(temp!=0){
    rem=temp%10
    sum+=rem**count
    temp=(temp/10)-(rem/10)
}
console.log(sum==n)