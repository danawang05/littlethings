;(function (data){
  // 命名空间
  var container = document.getElementById('container');
  
  var str = '', len = data.length;
  
  for(var i=0; i<data.length; i++){
    str += `<div class="goods">
        			<div class="header">
        				<input class="time" value="${data[i].time}">
        				<span class="btn">确定</span>
        			</div>
        			<div class="content">
        				<div class="countdown">
        					<span class="text">剩余</span>
        					<span class="number">0</span>
        					<span class="number">0</span>
        					<span class="point">:</span>
        					<span class="number">0</span>
        					<span class="number">0</span>
        					<span class="point">:</span>
        					<span class="number">0</span>
        					<span class="number">0</span>
        				</div>
        				<a href="javascript:;" class="thumbnail">
        					<img src="${data[i].img}">
        				</a>
        				<p class="name">${data[i].name}</p>
        				<p class="price-text">
        					抢购价：
        					<span class="price">￥${data[i].price}</span>
        				</p>
        			</div>
        			<div class="shadow"></div>
        			<div class="sign"></div>
        		</div>`
  }
  
  container.innerHTML = str;
})(goodsData);