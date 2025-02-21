    package com.example.myapplication;

    import com.google.android.material.textfield.TextInputEditText;
    import android.os.Bundle;
    import android.widget.TextView;
    import androidx.appcompat.app.AppCompatActivity;

    import android.view.View;
    import android.widget.Button;


    import androidx.appcompat.app.AppCompatActivity;

    public class MainActivity extends AppCompatActivity implements View.OnClickListener {

        TextView taskInput;
        TextView editText;



        @Override
        protected void onCreate(Bundle savedInstanceState) {
            Button button;
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_main);

            taskInput=findViewById(R.id.num);
            Button b0=findViewById(R.id.b0);
            Button b1=findViewById(R.id.b1);
            Button b2=findViewById(R.id.b2);
            Button b3=findViewById(R.id.b3);
            Button b4=findViewById(R.id.b4);
            Button b5=findViewById(R.id.b5);
            Button b6=findViewById(R.id.b6);
            Button b7=findViewById(R.id.b7);
            Button b8=findViewById(R.id.b8);
            Button b9=findViewById(R.id.b9);
            Button bc=findViewById(R.id.bc);
            Button br=findViewById(R.id.br);
            Button bp=findViewById(R.id.bp);
            Button bm=findViewById(R.id.bm);
            Button bmu=findViewById(R.id.bmu);
            Button bd=findViewById(R.id.bd);


            b0.setOnClickListener(this);
            b1.setOnClickListener(this);
            b2.setOnClickListener(this);
            b3.setOnClickListener(this);
            b4.setOnClickListener(this);
            b5.setOnClickListener(this);
            b6.setOnClickListener(this);
            b7.setOnClickListener(this);
            b8.setOnClickListener(this);
            b9.setOnClickListener(this);
            bc.setOnClickListener(this);
            br.setOnClickListener(this);
            bp.setOnClickListener(this);
            bm.setOnClickListener(this);
            bmu.setOnClickListener(this);
            bd.setOnClickListener(this);




        }

        @Override
        public void onClick(View view) {
            String currentText = taskInput.getText().toString();
            int id = view.getId();

            if (id == R.id.b0) {
                taskInput.setText(currentText + "0");
            } else if (id == R.id.b1) {
                taskInput.setText(currentText + "1");
            } else if (id == R.id.b2) {
                taskInput.setText(currentText + "2");
            } else if (id == R.id.b3) {
                taskInput.setText(currentText + "3");
            } else if (id == R.id.b4) {
                taskInput.setText(currentText + "4");
            } else if (id == R.id.b5) {
                taskInput.setText(currentText + "5");
            } else if (id == R.id.b6) {
                taskInput.setText(currentText + "6");
            } else if (id == R.id.b7) {
                taskInput.setText(currentText + "7");
            } else if (id == R.id.b8) {
                taskInput.setText(currentText + "8");
            } else if (id == R.id.b9) {
                taskInput.setText(currentText + "9");
            } else if (id == R.id.bc) {
                taskInput.setText("");
                editText.setText("");
            } else if (id == R.id.br) {
                calculateResult();
            } else if (id == R.id.bp) {
                taskInput.setText(currentText + "+");
            } else if (id == R.id.bm) {
                taskInput.setText(currentText + "-");
            } else if (id == R.id.bmu) {
                taskInput.setText(currentText + "*");
            } else if (id == R.id.bd) {
                taskInput.setText(currentText + "/");
            }
        }

        public void calculateResult(){
            editText=findViewById(R.id.editText1);
            String expression = taskInput.getText().toString();
            if (expression.contains("+")) {
                String[] parts = expression.split("\\+") ;
                editText.setText(String.valueOf(Integer.parseInt(parts[0]) + Integer.parseInt(parts[1])));
            } else if (expression.contains("-")) {
                String[] parts = expression.split("-");
                editText.setText(String.valueOf(Integer.parseInt(parts[0]) - Integer.parseInt(parts[1])));
            } else if (expression.contains("*")) {
                String[] parts = expression.split("\\*");
                editText.setText(String.valueOf(Integer.parseInt(parts[0]) * Integer.parseInt(parts[1])));
            } else if (expression.contains("/")) {
                String[] parts = expression.split("/");
                double result = Double.parseDouble(parts[0]) / Double.parseDouble(parts[1]);
                editText.setText(String.valueOf(result));         }
        }
    }
