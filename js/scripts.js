(function () {
        const input = $('#input');
        const addButton = $('#button');
        const list = $('#list');

        // Makes items in list moveable
        list.sortable();

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

                // Cross out item event when double clicked
                newItem.on('dblclick', function () {
                        toggleStrike($(this));
                });

                // Add in new item on list
                list.append(newItem);

                // Delete item event for X buttons
                $('.delete-button').on('click', function () {
                        deleteToDoItem($(this));
                });

                // Clear input elements value
                input.val('');
        }

        addButton.on('click', addToDoItem);
})();
