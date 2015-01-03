package pl.mkorwel.angularjs.sample;

import static spark.Spark.get;
import static spark.SparkBase.staticFileLocation;

public class StartApp {

	public static void main(String[] args) {
		staticFileLocation("/public");
		
		get("/fake", "application/json", (req, res) -> {
			return "";
		});
	}
}
