import React from 'react';


export default function delivery() {
  return (
    <div className='' style={{ backgroundImage: 'url("https://tse4.mm.bing.net/th?id=OIP.eai5p5q2xnf0Djy4euySygHaE8&pid=Api&P=0")', backgroundSize: 'cover',height: '100vh',objectFit: "fill" }}>
      <div class="container  text-center fs-3 bg-bright " style={{display:'flex',justifyContent:'center'}}>
        <ul class="list-unstyled mb-0">
          <li>
            <i class="fas fa-map-marker-alt fa-2x"></i>
            <p>San Francisco, CA 94126, USA</p>
          </li>

          <li>
            <i class="fas fa-phone mt-4 fa-2x"></i>
            <p>+ 01 234 567 89</p>
          </li>

          <li>
            <i class="fas fa-envelope mt-4 fa-2x"></i>
            <p>contact@gmail.com</p>
          </li>
        </ul>
      </div>
      
    </div>
  )
}
