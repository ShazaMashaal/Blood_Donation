using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Blood_Donation.Migrations
{
    public partial class user : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "BD",
                table: "AspNetUsers",
                type: "datetime2",
                nullable: true,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "BloodType",
                table: "AspNetUsers",
                type: "int",
                nullable: true,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "AspNetUsers",
                type: "nvarchar(30)",
                nullable: false);

            migrationBuilder.AddColumn<int>(
                name: "Gender",
                table: "AspNetUsers",
                type: "int",
                nullable: true,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Street",
                table: "AspNetUsers",
                type: "nvarchar(100)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BD",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "BloodType",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "City",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Street",
                table: "AspNetUsers");
        }
    }
}
