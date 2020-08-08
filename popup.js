
    document.addEventListener('DOMContentLoaded', function() {  
        var checkPageButton = document.getElementById('checkPage');  
        checkPageButton.addEventListener('click', function() {  
            chrome.tabs.getSelected(null, function(tab) {  
                d = document;  
                window.open('http://www.Ieuan.com', 'blank');  
            });  
        }, false);  
    }, false);  
