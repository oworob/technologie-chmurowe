import platform

def hello():
    system = platform.system()
    if system == "Linux":
        print("Witaj w Linux!")
    elif system == "Windows":
        print("Witaj w Windows!")
    else:
        print("Witaj w innym systemie operacyjnym!")

hello()
