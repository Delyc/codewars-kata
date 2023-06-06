function roundRobin(jobs, slice, index){
    let circles = 0;
    const queue = [...jobs]; 
  
    while (queue[index] > 0) {
      const currentJob = queue.shift(); 
      const executedTime = Math.min(currentJob, slice); 
      queue.push(currentJob - executedTime); 
      circles += executedTime; 
      if (index === 0) index = queue.length - 1; 
      else index--; 
    }
    return circles;
  }