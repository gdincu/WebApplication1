using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class Migration4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "_Type");

            migrationBuilder.DropTable(
                name: "Style");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Tire",
                table: "Tire");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Manufacturer",
                table: "Manufacturer");

            migrationBuilder.RenameTable(
                name: "Tire",
                newName: "Tires");

            migrationBuilder.RenameTable(
                name: "Manufacturer",
                newName: "Manufacturers");

            migrationBuilder.RenameColumn(
                name: "year",
                table: "Locations",
                newName: "Year");

            migrationBuilder.RenameColumn(
                name: "tireId",
                table: "Locations",
                newName: "TireId");

            migrationBuilder.RenameColumn(
                name: "quantity",
                table: "Locations",
                newName: "Quantity");

            migrationBuilder.RenameColumn(
                name: "price",
                table: "Locations",
                newName: "Price");

            migrationBuilder.RenameColumn(
                name: "locationName",
                table: "Locations",
                newName: "LocationName");

            migrationBuilder.RenameColumn(
                name: "width",
                table: "Tires",
                newName: "Width");

            migrationBuilder.RenameColumn(
                name: "typeId",
                table: "Tires",
                newName: "TypeId");

            migrationBuilder.RenameColumn(
                name: "styleId",
                table: "Tires",
                newName: "StyleId");

            migrationBuilder.RenameColumn(
                name: "rimSize",
                table: "Tires",
                newName: "RimSize");

            migrationBuilder.RenameColumn(
                name: "manufacturerId",
                table: "Tires",
                newName: "ManufacturerId");

            migrationBuilder.RenameColumn(
                name: "locationId",
                table: "Tires",
                newName: "LocationId");

            migrationBuilder.RenameColumn(
                name: "height",
                table: "Tires",
                newName: "Height");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Manufacturers",
                newName: "Name");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Tires",
                table: "Tires",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Manufacturers",
                table: "Manufacturers",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "CarModel",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Make = table.Column<string>(nullable: true),
                    Model = table.Column<string>(nullable: true),
                    TireId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarModel", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TireStyles",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TireStyles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TireTypes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TireTypes", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CarModel");

            migrationBuilder.DropTable(
                name: "TireStyles");

            migrationBuilder.DropTable(
                name: "TireTypes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Tires",
                table: "Tires");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Manufacturers",
                table: "Manufacturers");

            migrationBuilder.RenameTable(
                name: "Tires",
                newName: "Tire");

            migrationBuilder.RenameTable(
                name: "Manufacturers",
                newName: "Manufacturer");

            migrationBuilder.RenameColumn(
                name: "Year",
                table: "Locations",
                newName: "year");

            migrationBuilder.RenameColumn(
                name: "TireId",
                table: "Locations",
                newName: "tireId");

            migrationBuilder.RenameColumn(
                name: "Quantity",
                table: "Locations",
                newName: "quantity");

            migrationBuilder.RenameColumn(
                name: "Price",
                table: "Locations",
                newName: "price");

            migrationBuilder.RenameColumn(
                name: "LocationName",
                table: "Locations",
                newName: "locationName");

            migrationBuilder.RenameColumn(
                name: "Width",
                table: "Tire",
                newName: "width");

            migrationBuilder.RenameColumn(
                name: "TypeId",
                table: "Tire",
                newName: "typeId");

            migrationBuilder.RenameColumn(
                name: "StyleId",
                table: "Tire",
                newName: "styleId");

            migrationBuilder.RenameColumn(
                name: "RimSize",
                table: "Tire",
                newName: "rimSize");

            migrationBuilder.RenameColumn(
                name: "ManufacturerId",
                table: "Tire",
                newName: "manufacturerId");

            migrationBuilder.RenameColumn(
                name: "LocationId",
                table: "Tire",
                newName: "locationId");

            migrationBuilder.RenameColumn(
                name: "Height",
                table: "Tire",
                newName: "height");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Manufacturer",
                newName: "name");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Tire",
                table: "Tire",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Manufacturer",
                table: "Manufacturer",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "_Type",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Type", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Style",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Style", x => x.Id);
                });
        }
    }
}
