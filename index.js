function calculate (){
        const num1 = parseInt(document.getElementById("num1").value);
        const num2 = parseInt(document.getElementById("num2").value);
        const ops = document.getElementById("ops").value;
        switch (ops) {
            case "tambah":
                document.getElementById("equals").value = num1 + num2
                break;
                case "kurang":
                    document.getElementById("equals").value = num1 - num2 
                    break;
                    case "kali":
                        document.getElementById("equals").value = num1 * num2 
                        break;
                        case "bagi":
                            document.getElementById("equals").value = num1 / num2 
                            break;
                        }
                    }