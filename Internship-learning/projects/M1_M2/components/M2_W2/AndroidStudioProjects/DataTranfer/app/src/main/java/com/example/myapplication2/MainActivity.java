package com.example.myapplication2;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    EditText name;
    EditText email;
    EditText phone;
    Button save;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_main);

        name = findViewById(R.id.name);
        email = findViewById(R.id.email);
        phone = findViewById(R.id.phone);
        save = findViewById(R.id.save);

        save.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                validateAndProceed();
            }
        });
    }

    private void validateAndProceed() {
        String Name = name.getText().toString().trim();
        String Email = email.getText().toString().trim();
        String Phone = phone.getText().toString().trim();

        if (TextUtils.isEmpty(Name)) {
            name.setError("Name is required");
            return;
        }
        if (TextUtils.isEmpty(Email)) {
            email.setError("Email is required");
            return;
        }
        if (TextUtils.isEmpty(Phone)) {
            phone.setError("Phone is required");
            return;
        }

        Intent intent = new Intent(MainActivity.this, UserProfile.class);
        intent.putExtra("Name", Name);
        intent.putExtra("Email", Email);
        intent.putExtra("Phone", Phone);
        startActivity(intent);

    }
}
