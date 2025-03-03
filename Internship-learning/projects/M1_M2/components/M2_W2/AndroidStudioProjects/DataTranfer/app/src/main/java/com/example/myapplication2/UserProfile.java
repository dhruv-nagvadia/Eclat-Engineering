package com.example.myapplication2;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;

public class UserProfile extends AppCompatActivity {
    TextView name,email,phone;

    ImageView imageView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_userprofile);
        name=findViewById(R.id.name);
        email=findViewById(R.id.email);
        phone=findViewById(R.id.phone);
        imageView=findViewById(R.id.back);
        imageView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(UserProfile.this, MainActivity.class);
                startActivity(intent);
            }
        });


        String Name,Email,Phone;
        Name=getIntent().getExtras().getString("Name");
        Email=getIntent().getExtras().getString("Email");
        Phone=getIntent().getExtras().getString("Phone");

        name.setText("name:"+Name);
        email.setText("Email:"+Email);
        phone.setText("Phone:"+Phone);

    }
}