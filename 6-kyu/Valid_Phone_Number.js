function validPhoneNumber(phoneNumber){
    let phone = phoneNumber.split('');
        if(phone.length === 14){
            if( (phone[5] === ' ') && (phone[9] === '-') ) return true;        
        }
    return false;
    }