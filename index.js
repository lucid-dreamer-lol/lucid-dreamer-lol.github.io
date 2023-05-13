function flash(){
    fetch("https://flashertermer.onrender.com/flash")
    v=Math.random();
    document.getElementById('cat').src="https://cataas.com/cat?"+v;

}
