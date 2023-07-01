function calculateSumTime(n) {
    const startTime = new Date();
    startTime.getTime();
    let sum = 0;
    for (let i = 1; i <=n; i++) {
      sum += i;
    }
    const endTime = new Date();
    const elapsedTime = (endTime - startTime) / 1000;  // Convert to seconds
    

    console.log(elapsedTime +'s');
  }
  calculateSumTime(100000000);
  