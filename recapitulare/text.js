
        // 1
        // Metoda1
        // let num1 = 10, num2 = 20;
        // let aux;
        // aux = num1;
        // num1 = num2;
        // num2 = aux;
        // console.log(num1, num2);
        // Metoda2
        let num1 = 10, num2 = 20;
        [num1, num2] = [num2, num1];
        console.log(num1, num2);
        // Metoda3
        let num11 = 10, num12 = 20;
        num11 = num11 + num12;
        num12 = num11 - num12;
        num11 = num11 - num12;
        console.log(num11, num12);


        // 2
        function palindrom(str) {
            let reversedString = "";
            for (let i = 0; i < str.length; i++) {
                reversedString = str.charAt(i) + reversedString;
            }
            if (str === reversedString) {
                return true;
            }
            else {
                return false;
            }
        }
        function palindrom2(str) {
            let reversedString = str.split("").reverse().join("");
            if (str === reversedString) {
                return true;
            }
            else {
                return false;
            }
        }

        // 3
        function truncate(str, nr) {
            return str.split(' ').slice(0, nr).join(' ');
        }
        console.log(truncate("JavaScript este un limbaj de programare ușor de învățat.", 16));

        // 4
        const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

        function getDaysBetweenDates(dateText1, dateText2) {
            const date1 = new Date(dateText1);
            const date2 = new Date(dateText2);
            const diffTime = Math.abs(date2 - date1);
            const diffDays = Math.ceil(diffTime / DAY_IN_MILLISECONDS);
            return diffDays;
        }

        getDaysBetweenDates('12/15/2023', '12/13/2023');                 // 2

        function getAge(dateString) {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }

        // 5
        function removeDuplicates(arr) {
            if (arr.length <= 1) return arr;
            let currentIndex = 0;
            arr = arr.sort((a, b) => a - b);
            for (let i = 1; i < arr.length; i++) {
                if (arr[currentIndex] !== arr[i]) {
                    currentIndex++;
                    arr[currentIndex] = arr[i];
                }
            }
            arr.length = currentIndex + 1;
            return arr;
        }
        const arr = [6, 8, 5, 1, 10, 20, 4, 2, 3, 5, 9, 6, 2, 7, 1];
        console.log(removeDuplicates(arr));
    