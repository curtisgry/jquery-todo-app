(function () {
        const input = $('#input');
        const addButton = $('#button');
        const list = $('#list');

        let inputValue;

        function deleteToDoItem(element) {
                element.parent().addClass('delete');
        }

        function toggleStrike(element) {
                element.toggleClass('strike');
        }

        function addToDoItem() {
                inputValue = input.val();
                const newItem = $(`<li>${inputValue} <button class="delete-button">X</button></li>`);

                newItem.on('click', function () {
                        toggleStrike($(this));
                });

                list.append(newItem);

                // Delete item event for X buttons
                $('.delete-button').on('click', function () {
                        deleteToDoItem($(this));
                });
        }

        addButton.on('click', addToDoItem);
})();
