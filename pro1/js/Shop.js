
     
     let _li = document.querySelectorAll('#images>li')
        function para(self) {
            let txt = self.innerText
            for (i = 0; i < _li.length; i++) {
                temp = _li[i].getAttribute('data-cat')

                    if (
                        txt == temp
                    ) {
                        _li[i].classList.add('show')
                        _li[i].classList.remove('hide')
                    } else {
                        _li[i].classList.add('hide')
                        _li[i].classList.remove('show')
                    }
                // }


            }
        }

