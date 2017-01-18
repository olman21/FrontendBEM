import $ from 'jquery';

class Modal{
    constructor(){
        this.openModalBtn = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalBtn = $('.modal-close');
        this.subscribeEvents();
    }

    subscribeEvents(){
        this.openModalBtn.click(this.openModal.bind(this));
        this.closeModalBtn.click(this.closeModal.bind(this));
        $(document).keyup(this.closeModalOnEscKey.bind(this));
    }

    openModal(){
        this.modal.addClass('modal-visible');
        return false;
    }

    closeModal(){
        this.modal.removeClass('modal-visible');
        return false;
    }

    closeModalOnEscKey(e){
        if(e.keyCode == 27)
            this.closeModal();
    }
}

export default Modal;