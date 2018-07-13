package it.si2001.Employee.utils;

public class Utils {
    public static String classe;
    public static String messaggio;


    public Utils(String classe, String messaggio) {
        this.classe = classe;
        this.messaggio = messaggio;
    }

    public String toString() {
        String str = "[ " + classe.toUpperCase() + ": " + messaggio + " ]";
        System.out.println(str);
        return str;
    }

    public static boolean isValid(String s) {
        if (s == null || s.equals("")) {
            return false;
        } else {
            return true;
        }
    }


    public String getClasse() {
        return classe;
    }

    public void setClasse(String classe) {
        this.classe = classe;
    }

    public String getMessaggio() {
        return messaggio;
    }

    public void setMessaggio(String messaggio) {
        this.messaggio = messaggio;
    }

}
