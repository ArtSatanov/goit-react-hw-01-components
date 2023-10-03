export const Statistics = (statistics) => {
   return (
      <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
            {statistics.map((stat) => (
               <StatItem key={stat.id} label={stat.label} percentage={stat.percentage} />        
      ))}
  </ul>
</section>
    
 )
}


{/* <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section> */}