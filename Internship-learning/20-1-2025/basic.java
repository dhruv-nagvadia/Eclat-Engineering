// datatype variable =value 

//this is the pattern to declare variable

/*-----------------------------------------------------------------------------------------------------------------------------------*/
  

class oops{
  public void inheritance(){
    System.out.println("this is example of inheritence");
  };
  public void overriding(){
    System.err.println("this is parent class method");
  }
}
public class basic extends oops {
  private String name;
  int w=5;
  public basic(String name){ 
  name=name;
  }
  /*-----------------------------------------------------------------------------------------------------------------------------------*/
  public void fullname(){
   String name = "John";
   System.out.println(name);//john
   name="dhruv";
   System.err.println(name);//dhruv
   String surname="nagvadia";
   System.err.println("fullname:-"+surname+name);
  }
 //variables 
 /*-----------------------------------------------------------------------------------------------------------------------------------*/
  public void detail(){
   String name="dhruv";
   int age=21;
   char c='d';
   boolean pro=true; 
   double cpi = 7.2d;
   float year =3.5f;
   System.err.println(name + "\t" + age + "\t" + c + "\t" + pro + "\t" + cpi + "\t" + year);
  }
  //data_types
  /*-----------------------------------------------------------------------------------------------------------------------------------*/
   
  public void typecasting(){
   int maxScore = 500;
   int userScore = 423;
   float percentage = (float) userScore / maxScore * 100.0f;
   System.out.println("User's percentage is " + percentage);

  }

  //type_casting
  /*-----------------------------------------------------------------------------------------------------------------------------------*/
  public void operator(int x , int y){
    int sum=x+y;
    int sub=x-y;
    int mul=x*y;
    int div=0;
    if(y>0){
     div=x/y;
    }
    System.err.println(sum + "\t"+ sub+ "\t"+ mul+"\t"+div);
  }

  //operators
  /*-----------------------------------------------------------------------------------------------------------------------------------*/
  public void stringoperation(String s){
    int length=s.length();
    int index=s.indexOf("a");
    String upper=s.toUpperCase();
    String lower=s.toLowerCase();
    System.err.println(length +"\t"+index +"\t"+upper+"\t"+lower);
    String firstName = "dhurv ";
    String lastName = "nagvadia";  
    System.out.println(firstName.concat(lastName));
    System.out.println(upper+index);
  }

  //string_operations
  /*-----------------------------------------------------------------------------------------------------------------------------------*/
  public void ifelsee(String name,int marks){
    String namee=name;

    if(marks<18){
      System.err.println("student"+namee+"is detained because he/she has less than 18 marks");
    }else{
      System.err.println("student"+namee+"passed exam");
    }
  }
  //ifelse
  /*-----------------------------------------------------------------------------------------------------------------------------------*/
  public void loops(int num){
    int sum=0;
    for(int i=0;i<num;i++){
      sum+=i;
    }
    System.err.println(sum);

    while(num>0){
      int sub=1;
      num-=sub;
      System.err.println(num);
    }

    do{
      int mul=0;
      num*=mul;
      System.err.println(mul);
    }while(num>15);
  }
  //loops
  /*-----------------------------------------------------------------------------------------------------------------------------------*/
  
  public void overriding(){
    System.err.println("this is child class method");
  }
  //overriding
  /*-----------------------------------------------------------------------------------------------------------------------------------*/

  public void Encapulation(String namee){
    name=namee;
    System.out.println(name);
  }
  //encapulation
  /*-----------------------------------------------------------------------------------------------------------------------------------*/

  public static void main (String[] args) {
       basic basic =new basic("dhruv");
       //basic.name  -it gives errror we can not use privet attributre directly
       basic.fullname();//fullname:-dhruvngavdia
       basic.detail();// dhurv 21 d true 7.2 3.5 
       basic.typecasting();//84.6
       basic.operator(4,2);//6 2 8 2 
       basic.stringoperation("dhurva");//6 5 DHRUVA dhruva dhruv nagvadia
       basic.ifelsee("dhurv",25);//studen dhruv paseed exam.
       basic.loops(15);//105
       System.err.println(basic.w);//5
       basic.inheritance();//this is example of inheritence
       oops o1=new oops();
       oops o2=new basic("ddd");//polymorphism
       o1.overriding();//this is parent class method
       o2.overriding();//this is child class method 
       basic.Encapulation("ddd");//we can not directly use name beacuase it is privet thats why we use encapsulation

   }
}




