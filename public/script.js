document.addEventListener('DOMContentLoaded',()=>{
    const deleteData=document.querySelectorAll('.deleteData');
    deleteData.forEach((icon)=>{
        icon.addEventListener('click',(e)=>{
            e.preventDefault();
            const form=icon.closest('form');
            form.submit();
        })
    })
})

