const bcryptjs=require('bcryptjs')

const  hashfunction=async ()=>{

try {
    const password=bcryptjs.hash('akshay',8);
} catch (error) {
    
}

}
hashfunction();

